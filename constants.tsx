export const BRAND_NAME = 'Silatech Growth Partners';
export const SITE_URL = 'https://kevsilaservices.netlify.app';
export const PHONE_NUMBER = '+254 717 578 394';
export const TEL_LINK = 'tel:+254717578394';
export const whatsappLink = (message: string) => `https://wa.me/254717578394?text=${encodeURIComponent(message)}`;
export const WHATSAPP_LINK = whatsappLink('Hello Silatech, I would like to discuss technology support for my business or organisation.');
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/kevin-sila-9143b618a/',
  github: 'https://github.com/KevSila',
  portfolio: 'https://kevsilaportfolio.netlify.app',
};
export const NAV_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Selected work', href: '/portfolio' },
  { name: 'Our approach', href: '/#process' },
  { name: 'About', href: '/#about' },
];