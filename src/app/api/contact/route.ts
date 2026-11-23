import { NextRequest, NextResponse } from 'next/server';

import { FALLBACK_CONTACT_PAGE_SETTINGS } from '@/app/(site)/(public)/contact/fallback-data';
import { getPage } from '@/lib/cms';
import {
  confirmationEmail as buildConfirmationEmail,
  homeContactFrom,
  notificationEmail as buildNotificationEmail,
  type HomeContact,
} from '@/lib/email/contact-emails';

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

interface ZeptoMailFromAddress {
  address: string;
  name?: string;
}

interface ZeptoMailToEmailAddress {
  address: string;
  name?: string;
}

interface ZeptoMailToObject {
  email_address: ZeptoMailToEmailAddress;
}

interface ZeptoMailRequest {
  from: ZeptoMailFromAddress;
  to: ZeptoMailToObject[];
  subject: string;
  htmlbody: string;
  textbody?: string;
  reply_to?: ZeptoMailFromAddress[];
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    console.log('Contact form submission received:', {
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
    } else if (!/^[\p{L}\p{M}\s\-'.]+$/u.test(name.trim())) {
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

    // The home's own email and phone numbers, as staff keep them on the Contact
    // page, so the confirmation never points people at the no-reply sender.
    let home: HomeContact;
    try {
      const page = (await getPage('contact-page')) as { infoSection?: { details?: unknown } };
      home = homeContactFrom(page?.infoSection?.details);
    } catch (err) {
      console.error('[contact] CMS read failed, using fallback contact details:', err);
      home = homeContactFrom(FALLBACK_CONTACT_PAGE_SETTINGS.infoSection.details);
    }
    if (!home.email && !home.phones.length) {
      home = homeContactFrom(FALLBACK_CONTACT_PAGE_SETTINGS.infoSection.details);
    }

    const origin = (process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin).replace(/\/+$/, '');
    const submitted = { name: name.trim(), email: email.trim(), message: message.trim() };
    const notification = buildNotificationEmail(origin, submitted);
    const confirmation = buildConfirmationEmail(origin, submitted, home);

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
      .map((email) => ({ email_address: { address: email } })); // Convert to ZeptoMail format


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
      subject: notification.subject,
      htmlbody: notification.html,
      textbody: notification.text,
    };

    // Prepare confirmation email to the person who submitted the form
    const confirmationEmail: ZeptoMailRequest = {
      from: {
        address: process.env.MAIL_FROM_EMAIL!,
        name: process.env.MAIL_FROM_NAME || 'Ekuphumuleni',
      },
      to: [
        {
          email_address: {
            address: email,
            name: name,
          },
        },
      ],
      subject: confirmation.subject,
      htmlbody: confirmation.html,
      textbody: confirmation.text,
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
