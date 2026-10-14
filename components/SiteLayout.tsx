import type { ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
export default function SiteLayout({children}: {children: ReactNode}) {
  return <MotionConfig reducedMotion="user"><a href="#main-content" className="skip-link">Skip to content</a><div className="min-h-screen bg-ink"><Navbar /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><WhatsAppButton /></div></MotionConfig>;
}