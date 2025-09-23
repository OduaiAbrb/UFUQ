# Ufuq - Handcrafted Web & Mobile Apps

A professional, bilingual (Arabic/English) landing page for Ufuq - custom software development services.

## Features

- **Bilingual Support**: Seamless Arabic/English language switching
- **EmailJS Integration**: Professional contact form with email functionality
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Privacy-Focused**: Masked contact details for security
- **Accessibility**: Full keyboard navigation and screen reader support
- **SEO Optimized**: Structured data and bilingual meta tags

## EmailJS Setup

To enable the contact form email functionality:

1. **Create EmailJS Account**: Sign up at [emailjs.com](https://www.emailjs.com/)

2. **Create Email Service**: 
   - Go to Email Services and add Gmail service
   - Connect your Gmail account (oduaiabrb@gmail.com)
   - Note your Service ID (currently set as `service_fsweyww`)

3. **Create Email Template**:
   - Go to Email Templates and create a new template
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Note your Template ID

4. **Get Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update Configuration**:
   - Open `src/components/Contact.tsx`
   - Replace the placeholder values in `EMAILJS_CONFIG`:
     ```typescript
     const EMAILJS_CONFIG = {
       SERVICE_ID: 'your_service_id_here',
       TEMPLATE_ID: 'your_template_id_here', 
       PUBLIC_KEY: 'your_public_key_here'
     };
     ```

## Contact Information Updates

To update contact details:

1. **Email**: Update `oduaiabrb@gmail.com` in Contact.tsx
2. **Phone**: Update `+962796977413` in Contact.tsx and Footer.tsx
3. **WhatsApp**: Update WhatsApp number in the wa.me links

## Deployment

```bash
npm run build
npm run preview
```

## Development

```bash
npm run dev
```

## Form Functionality

- **Primary**: EmailJS sends emails directly to your inbox
- **Fallback**: If EmailJS fails, opens user's email client with pre-filled message
- **Validation**: Real-time form validation in both languages
- **Status**: Loading states, success/error messages
- **Accessibility**: Full keyboard navigation and screen reader support

## Technologies

- React 18 + TypeScript
- Tailwind CSS
- EmailJS for contact form
- Lucide React for icons
- Vite for build tooling