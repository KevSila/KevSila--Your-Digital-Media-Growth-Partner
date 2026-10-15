import { SITE_URL } from '../constants';
import { pageMetadata } from '../data/siteMetadata';

let previousPath: string | undefined;
export function trackPageView(pathname: string) {
  const path=pathname.replace(/\/+$/,'') || '/';
  // Never send preview traffic, query strings, fragments or arbitrary unknown paths.
  if(window.location.origin!==SITE_URL || !window.gtag) return;
  const meta=pageMetadata[path];
  if(!meta) {previousPath=undefined;return;}
  if(path===previousPath) return; // Includes StrictMode effect replay and hash/query-only changes.
  let referrer='';
  if(previousPath) referrer=SITE_URL+previousPath;
  else {
    try {referrer=new URL(document.referrer).origin+'/';} catch { /* No valid external referrer. */ }
  }
  const context={page_location:SITE_URL+path,page_title:meta.title,page_referrer:referrer};
  // Keep subsequent custom events on the same sanitised page context.
  window.gtag('config','G-1JH25BX9F8',{send_page_view:false,...context});
  window.gtag('event','page_view',context);
  previousPath=path;
}