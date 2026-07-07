export type LegalPolicy = {
  id: string;
  title: string;
  lastUpdated: string;
  markdown: string;
};

export const legalPolicies: LegalPolicy[] = [
  {
    id: "terms-of-use",
    title: "Terms of Use",
    lastUpdated: "29/04/2026",
    markdown: `These terms govern your use of this website and your relationship with Excel Electrics when you enquire or book services through it.

### Using this website
By using this site you agree to these terms. If you do not agree, please do not use the site.

### Enquiries and services
Information on this website is for general guidance. Quotes, contracts, and on-site work are subject to separate agreement and our standard terms of business where applicable.

### Liability
Nothing in these terms excludes or limits liability that cannot be excluded under applicable law. We do not accept liability for any loss arising from reliance on website content where it is not reasonably foreseeable.

### Changes
We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.

For questions, contact us at info@excelelectrics.com.`,
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "19/06/2026",
    markdown: `Excel Fire Ltd, trading as Excel Electrics, is committed to protecting your personal data and handling it responsibly.

### What we collect
- Your name, email address, phone number, and any information you submit through contact forms.
- Information you provide through the website chatbot, including conversation content and any details you choose to share.
- Basic technical information, such as browser type, device information, pages viewed, approximate location derived from technical data, and security signals used to protect the website.
- Where you accept analytics cookies, usage data collected through Google Analytics and Google Tag Manager to help us understand how the website is used and how our marketing performs.

### How we use your information
- To respond to enquiries and provide electrical services.
- To manage bookings, quotations, and customer support.
- To improve website performance and user experience.
- To monitor and improve the website chatbot and help ensure it gives relevant, appropriate responses.
- To protect the website and enquiry forms from spam, abuse, and automated submissions.
- To measure website traffic and marketing performance where you have accepted analytics cookies.

### Data sharing
We do not sell your personal data. We only share information with trusted providers where necessary to operate our business, respond to enquiries, run the website, provide chatbot functionality, protect forms from spam, measure website usage, or comply with legal obligations.

These providers may include website hosting, email delivery, chatbot, analytics (including Google), and anti-spam/security services.

### Data retention
We keep personal data only for as long as needed for operational, legal, contractual, security, and customer service purposes. Chatbot conversations and enquiry records may be reviewed to support customers, improve the service, and monitor quality.

### Your rights
You may request access, correction, or deletion of your personal data by contacting us at info@excelelectrics.com.
`,
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "19/06/2026",
    markdown: `This site uses cookies and similar technologies to ensure the website functions correctly, support security features, operate the chatbot, and measure website usage in line with your consent choices.

### Essential cookies and technologies
These are required for the site to work and do not require your consent:
- Cookies and storage needed for core site functionality, such as theme preference and cookie consent choice.
- Security and anti-spam technologies, including Cloudflare Turnstile, used to help protect contact forms from automated abuse.
- Chatbot-related storage or cookies used to operate the live chat experience and maintain conversation context.

### Analytics and advertising cookies (optional)
We use **Google Consent Mode** with:
- **Google Analytics 4 (GA4)** — helps us understand pages visited, traffic sources, and general website usage.
- **Google Tag Manager (GTM)** — manages analytics and marketing tags on the site, including tags used for Google Ads measurement.

These tools may set cookies and collect usage information. They are provided by Google and may process data outside the UK.

If you choose **Accept**, we grant consent for analytics and advertising cookies and full measurement.

If you choose **Essential only**, analytics and advertising cookies remain off. Google tags may still send limited, cookieless signals so we can understand overall traffic patterns and support advertising measurement without storing advertising cookies on your device.

### How we use cookies
- To maintain secure, reliable website operation.
- To support contact form protection and reduce spam submissions.
- To provide chatbot functionality and improve the customer support experience.
- To review traffic data and improve content, services, and marketing in line with your consent choices.

### Managing cookies
You can change your choice at any time by clearing site data for this website in your browser and revisiting the site to see the cookie banner again. You can also manage or disable cookies through your browser settings. Disabling essential cookies may affect parts of the website functionality.

For questions about cookies or personal data, please contact info@excelelectrics.com.
`,
  },
];
