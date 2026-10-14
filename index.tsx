import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { trackContact } from './lib/contact';
import './index.css';
declare global { interface Window { gtag?: (...args: unknown[])=>void; } }
function trackContactIntent(event: MouseEvent) {
  if(!(event.target instanceof Element)) return;
  const link=event.target.closest<HTMLAnchorElement>('a');
  if(!link) return;
  const href=link.getAttribute('href') || '';
  // Keep message text and URL query strings out of custom analytics events.
  if(href.startsWith('https://wa.me/')) trackContact('whatsapp',link.dataset.contactPlacement || 'site');
  else if(href.startsWith('tel:')) trackContact('phone');
}
document.addEventListener('click',trackContactIntent);
const rootElement=document.getElementById('root');
if(!rootElement) throw new Error('Could not find root element to mount to');
// Keep prerendered content visible while route chunks hydrate.
const app=<React.StrictMode><App /></React.StrictMode>;
const currentPath=window.location.pathname.replace(/\/+$/,'') || '/';
if(rootElement.dataset.renderedPath===currentPath) ReactDOM.hydrateRoot(rootElement,app);
else ReactDOM.createRoot(rootElement).render(app);