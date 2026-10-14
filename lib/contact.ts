export type ContactMethod = 'whatsapp' | 'phone';
export function trackContact(method: ContactMethod, placement='site') {
  window.gtag?.('event',method==='whatsapp' ? 'generate_lead' : 'contact_click',{method,placement});
}
export function contactMessage(intent: string, starting: string, serviceTitle: string | undefined, message: string) {
  const label=intent==='project' ? 'a project' : intent==='support' ? 'ongoing support' : 'a technology consultation';
  return `Hello Silatech, I would like to discuss ${label}.\nStarting point: ${starting}.${serviceTitle ? `\nArea of interest: ${serviceTitle}.` : ''}${message.trim() ? `\n\n${message.trim()}` : ''}`;
}