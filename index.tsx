
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackContactIntent = (event: MouseEvent) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const link = target.closest<HTMLAnchorElement>('a');
  if (!link) return;

  const href = link.getAttribute('href') || '';
  const linkText = link.textContent?.replace(/\s+/g, ' ').trim() || undefined;

  if (href.startsWith('https://wa.me/')) {
    window.gtag?.('event', 'generate_lead', {
      method: 'whatsapp',
      link_url: link.href,
      link_text: linkText
    });
  } else if (href.startsWith('tel:')) {
    window.gtag?.('event', 'contact_click', {
      method: 'phone',
      link_url: href,
      link_text: linkText
    });
  }
};

document.addEventListener('click', trackContactIntent);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);