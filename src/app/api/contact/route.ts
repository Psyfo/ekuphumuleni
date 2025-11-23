import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ZeptoMailAddress {
  address: string;
  name?: string;
}

interface ZeptoMailRequest {
  from: ZeptoMailAddress;
  to: ZeptoMailAddress[];
  subject: string;
  htmlbody: string;
  textbody?: string;
  reply_to?: ZeptoMailAddress[];
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    console.log('Contact form submission received:', {
      name,
      email,
      message,
      messageLength: message?.length,
    });

    // Enhanced validation with specific error messages
    const errors: FormErrors = {};

    if (!name?.trim()) {
      errors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    } else if (name.trim().length > 100) {
      errors.name = 'Name must be less than 100 characters';
    } else if (!/^[a-zA-Z\s\-']+$/.test(name.trim())) {
      errors.name =
        'Name can only contain letters, spaces, hyphens, and apostrophes';
    }

    if (!email?.trim()) {
      errors.email = 'Email is required';
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim())
    ) {
      errors.email = 'Please enter a valid email address';
    } else if (email.length > 254) {
      errors.email = 'Email address is too long';
    }

    if (!message?.trim()) {
      errors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    } else if (message.trim().length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }

    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
      return NextResponse.json(
        { error: 'Please correct the errors below', validationErrors: errors },
        { status: 400 }
      );
    }

    // Verify environment variables
    if (
      !process.env.ZEPTOMAIL_HOST ||
      !process.env.ZEPTOMAIL_TOKEN ||
      !process.env.MAIL_FROM_EMAIL
    ) {
      console.error('Missing ZeptoMail configuration environment variables');
      return NextResponse.json(
        {
          error:
            'Email service is not properly configured. Please try again later.',
        },
        { status: 500 }
      );
    }

    console.log('Preparing to send emails via ZeptoMail...');

    // Email template styles matching brand aesthetics
    const emailStyles = `
      <style>
        body {
          font-family: 'Nunito', Arial, sans-serif;
          background-color: #F2E8CF;
          color: #6B4F4F;
          margin: 0;
          padding: 20px;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #EDE6E3;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(107, 79, 79, 0.1);
        }
        .header {
          background: #A68A64;
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          margin: 0;
          font-weight: 700;
        }
        .content {
          padding: 30px 20px;
        }
        .content h2 {
          font-family: 'Playfair Display', serif;
          color: #A68A64;
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .content h3 {
          font-family: 'Playfair Display', serif;
          color: #A68A64;
          font-size: 20px;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .message-box {
          background: #F2E8CF;
          border-left: 4px solid #C97C5D;
          padding: 20px;
          margin: 20px 0;
          border-radius: 0 8px 8px 0;
        }
        .footer {
          background: #6B4F4F;
          color: white;
          padding: 20px;
          text-align: center;
          font-size: 14px;
        }
        .accent {
          color: #C97C5D;
          font-weight: 600;
        }
        .contact-info {
          background: #D9C6A5;
          padding: 15px;
          border-radius: 8px;
          margin: 15px 0;
        }
        .contact-info strong {
          color: #A68A64;
        }
      </style>
    `;

    // Sanitize message content for HTML
    const sanitizedMessage = message
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\n/g, '<br>');

    // Email to site owner (notification of new contact)
    const ownerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>New Contact Form Submission - Ekuphumuleni</title>
          ${emailStyles}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Ekuphumuleni</h1>
            </div>
            <div class="content">
              <h2>New Contact Form Submission</h2>
              <p>You have received a new message through your website contact form.</p>
              
              <div class="contact-info">
                <h3>Contact Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <span class="accent">${email}</span></p>
              </div>

              <div class="message-box">
                <h3>Message:</h3>
                <p>${sanitizedMessage}</p>
              </div>

              <p><em>You can reply directly to this email to respond to ${name}.</em></p>
            </div>
            <div class="footer">
              <p>This message was sent through your website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email to person who submitted the form (confirmation)
    const confirmationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Thank You for Contacting Ekuphumuleni</title>
          ${emailStyles}
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Ekuphumuleni</h1>
            </div>
            <div class="content">
              <h2>Thank You for Your Message</h2>
              <p>Dear <span class="accent">${name}</span>,</p>
              
              <p>Thank you for reaching out to us. We have received your message and appreciate you taking the time to contact us.</p>

              <div class="message-box">
                <h3>Your Message:</h3>
                <p>${sanitizedMessage}</p>
              </div>

              <p>We will review your message and respond within <strong>24-48 hours</strong>.</p>

              <div class="contact-info">
                <h3>Need Immediate Assistance?</h3>
                <p>If your matter is urgent, please contact us directly at:</p>
                <p><strong>Email:</strong> <span class="accent">${process.env.MAIL_FROM_EMAIL}</span></p>
              </div>

              <p style="margin-top: 30px;">
                <em>Thank you,</em><br>
                <strong class="accent">The Ekuphumuleni Team</strong>
              </p>
            </div>
            <div class="footer">
              <p>Thank you for contacting us.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    console.log('Sending emails...');

    // Helper function to send email via ZeptoMail REST API
    const sendZeptoMail = async (mailData: ZeptoMailRequest) => {
      const response = await fetch(
        `https://${process.env.ZEPTOMAIL_HOST}/v1.1/email`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: process.env.ZEPTOMAIL_TOKEN!,
          },
          body: JSON.stringify(mailData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('ZeptoMail API error:', errorText);
        throw new Error(`ZeptoMail API error: ${response.status}`);
      }

      return response.json();
    };

    // Parse multiple recipient emails from environment variable
    const recipientEmails = (
      process.env.MAIL_TO_EMAIL || process.env.MAIL_FROM_EMAIL!
    )
      .split(',') // Split by comma
      .map((email) => email.trim()) // Remove whitespace
      .filter((email) => email.length > 0) // Remove empty strings
      .map((email) => ({ address: email })); // Convert to ZeptoMail format

    // Prepare email to site owner (notification of new contact)
    const ownerEmail: ZeptoMailRequest = {
      from: {
        address: process.env.MAIL_FROM_EMAIL!,
        name: process.env.MAIL_FROM_NAME || 'Ekuphumuleni',
      },
      to: recipientEmails,
      reply_to: [
        {
          address: email,
          name: name,
        },
      ],
      subject: `New Contact Form Submission from ${name}`,
      htmlbody: ownerEmailHtml,
      textbody: `New contact form submission from ${name} (${email}):\n\n${message}`,
    };

    // Prepare confirmation email to the person who submitted the form
    const confirmationEmail: ZeptoMailRequest = {
      from: {
        address: process.env.MAIL_FROM_EMAIL!,
        name: process.env.MAIL_FROM_NAME || 'Ekuphumuleni',
      },
      to: [
        {
          address: email,
          name: name,
        },
      ],
      subject: 'Thank you for contacting Ekuphumuleni',
      htmlbody: confirmationEmailHtml,
      textbody: `Dear ${name},\n\nThank you for contacting us. We have received your message and will respond within 24-48 hours.\n\nYour message:\n${message}\n\nThank you,\nThe Ekuphumuleni Team`,
    };

    // Send both emails with Promise.all for better performance
    try {
      await Promise.all([
        sendZeptoMail(ownerEmail),
        sendZeptoMail(confirmationEmail),
      ]);

      console.log('Emails sent successfully via ZeptoMail');

      return NextResponse.json({
        message: 'Emails sent successfully',
        success: true,
      });
    } catch (emailError) {
      console.error('Failed to send emails:', emailError);
      return NextResponse.json(
        {
          error:
            'Failed to send confirmation emails. Please try again or contact us directly.',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);

    // Provide more specific error messages
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid request format. Please try again.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
