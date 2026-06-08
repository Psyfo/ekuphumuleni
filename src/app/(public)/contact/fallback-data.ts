/**
 * Fallback content for the Contact page, used when the Sanity CMS is
 * unreachable or the contactPageSettings singleton has not been created yet.
 * Mirrors the original static page content verbatim.
 */

export const FALLBACK_CONTACT_PAGE_SETTINGS = {
  heroTitle: 'Get in Touch',
  heroSubtitle:
    "We're here to answer your questions and provide the information you need about our geriatric care services and facilities",
  heroQuote:
    "Whether you're seeking information about our services, exploring care options for a loved one, or wanting to support our mission, we welcome your inquiries",

  seo: {
    metaTitle: 'Contact Us',
    metaDescription:
      'Get in touch with Ekuphumuleni Geriatric Nursing Home. Located at Stand 7165 Old Falls Road, Bulawayo. Call +263 292 216877 or +263 778 719166, or email administration@ekuphumuleni.ngo. Patient visits daily 8AM-4PM. Office hours Mon-Fri 8AM-4PM.',
  },

  formSection: {
    heading: 'Send Us a Message',
    subheading:
      "Fill out the form below and we'll get back to you within 24-48 hours",
    nameLabel: 'Your Name',
    namePlaceholder: 'e.g., John Doe',
    emailLabel: 'Email Address',
    emailPlaceholder: 'e.g., john@example.com',
    messageLabel: 'Your Message',
    messagePlaceholder: 'Please tell us how we can help you...',
    messageHelpText: 'Minimum 10 characters, maximum 2000 characters',
    submitButtonLabel: 'Send Message',
    successHeading: 'Message Sent Successfully!',
    successBody:
      "Thank you for reaching out to us. We've received your message and will respond within 24-48 hours. Please check your email for a confirmation message.",
    errorHeading: 'Error Sending Message',
  },

  infoSection: {
    heading: 'Contact Information',
    subtitle:
      'Find us at our location or reach out through any of the channels below',
    details: [
      {
        iconName: 'map-pin',
        title: 'Our Location',
        lines: ['Stand 7165 Old Falls Road', 'P O Box 1667', 'Bulawayo, Zimbabwe'],
        link: null,
      },
      {
        iconName: 'phone',
        title: 'Phone',
        lines: ['Tel: +263 292 216877', 'Mobile: +263 778 719166'],
        link: null,
      },
      {
        iconName: 'envelope',
        title: 'Email',
        lines: ['administration@ekuphumuleni.ngo'],
        link: 'mailto:administration@ekuphumuleni.ngo',
      },
      {
        iconName: 'clock',
        title: 'Visiting Hours',
        lines: [
          'Patient Visits: Daily 8:00 AM - 4:00 PM',
          'Office Hours: Mon - Fri 8:00 AM - 4:00 PM',
        ],
        link: null,
      },
    ],
    mapQuery: 'Ekuphumuleni Geriatric Nursing Home, VHCG+86V, Old Falls Rd, Bulawayo',
    additionalInfoHeading: 'Planning a visit?',
    additionalInfoBody:
      'We recommend calling ahead to schedule your visit and ensure we can provide you with the attention and information you need. Our team is here to assist you with any questions about our services and facilities.',
  },
};
