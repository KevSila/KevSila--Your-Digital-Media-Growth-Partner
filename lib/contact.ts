export type ContactMethod = 'whatsapp' | 'phone';
export function trackContact(method: ContactMethod, placement='site') {
  // A click is contact intent, not a submitted or qualified lead.
  window.gtag?.('event','contact_click',{method,placement});
}
export function contactMessage(intent: string, starting: string, serviceTitle: string | undefined, message: string) {
  const label=intent==='project' ? 'a project' : intent==='support' ? 'ongoing support' : 'a technology consultation';
  return `Hello Silatech, I would like to discuss ${label}.\nStarting point: ${starting}.${serviceTitle ? `\nArea of interest: ${serviceTitle}.` : ''}${message.trim() ? `\n\n${message.trim()}` : ''}`;
}