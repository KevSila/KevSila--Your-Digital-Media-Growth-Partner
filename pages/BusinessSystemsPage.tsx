
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  LineChart, 
  Search, 
  Settings2, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Layers, 
  BarChart3, 
  Database, 
  Network, 
  ClipboardCheck, 
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Stethoscope,
  Briefcase,
  Scale,
  Building2,
  GraduationCap
} from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const BusinessSystemsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-8 mx-auto"
          >
            Silatech Growth Partners
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-medium leading-[1.1] tracking-tight text-white mb-8 max-w-4xl mx-auto"
          >
            AI-Powered Business Systems That Improve How Your <span className="text-glow">Business Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-normal"
          >
            We help growing businesses replace scattered manual work with simple, AI-powered operating systems that improve visibility, follow-up, efficiency, and growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group flex items-center space-x-2">
              <span>Book a Systems Diagnostic</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#examples" className="btn-secondary">
              View Example Systems
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center space-x-2 text-[10px] font-mono text-brand-blue uppercase tracking-[0.2em] opacity-80"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Built for businesses that rely on leads, records, follow-ups, reports, appointments, stock, teams, and daily operations.</span>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION (THE HIDDEN COST OF SCATTERED OPERATIONS) */}
      <section className="py-24 bg-white/2 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label mb-6">The Challenge</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                The Hidden Cost of Scattered Operations
              </h2>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                Most growing businesses, clinics, training firms, and NGOs already use digital tools of some kind—whether it's WhatsApp, Excel / Google Sheets, POS systems, booking apps, accounting software, email, paper records, M-Pesa / Paybill logs, or shared Google Drive folders.
              </p>
              <p className="text-slate-400 font-normal leading-relaxed mb-8">
                But when these tools are completely isolated from one another, they create a silent operational drag on your growth. Valuable resources leak out through:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Missed lead follow-ups & lost sales',
                  'Repetitive manual reporting & admin',
                  'Scattered client records across sheets',
                  'Delayed stock updates & stockouts',
                  'Zero immediate visibility for owners',
                  'Fragile spreadsheets that break constantly'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-sm text-slate-300">
                    <AlertCircle className="w-4.5 h-4.5 text-brand-blue flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 border border-white/10 p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-sm font-mono text-slate-400">Isolated Tools & Manual Work</span>
                    <span className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded uppercase font-bold tracking-wider">High Friction</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-white rotate-90" />
                  </div>
                  <div className="p-4 bg-brand-blue/10 rounded-xl border border-brand-blue/20 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Connected Intelligence</h3>
                    <p className="text-sm text-slate-300 font-light">Turn fragmented tools into a unified, privacy-conscious operating system.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-soft-black border border-white/10 rounded-2xl shadow-2xl max-w-sm">
                <p className="text-sm font-medium text-white italic">"We do not just build tools. We improve how your business works."</p>
              </div>
            </motion.div>
          </div>

          {/* BEFORE VS AFTER GRID (WHAT WE SOLVE) */}
          <div className="border-t border-white/5 pt-16">
            <div className="text-center mb-12">
              <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest">Smarter Operations</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">Before vs After: What We Solve</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* BEFORE */}
              <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500/10 text-red-500 text-[10px] font-mono px-4 py-1.5 rounded-bl-xl uppercase tracking-wider font-semibold">
                  Scattered Setup (Before)
                </div>
                <h3 className="text-lg font-bold text-slate-400 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Where Growth Gets Stuck
                </h3>
                <ul className="space-y-4">
                  {[
                    { title: "Missed Lead Follow-Ups", desc: "Customer inquiries sit unread in your WhatsApp inbox or sheets, letting business slip to fast-responding competitors." },
                    { title: "Manual Reports & Broken Formulas", desc: "Your staff spends hours copy-pasting numbers from sheets to sheets. Formulas break, and you get monthly financial insights weeks too late." },
                    { title: "Scattered Customer Records", desc: "No single customer history repository. Leads, invoices, status records, and support logs are scattered across team notebooks and drives." },
                    { title: "Zero Stock or Daily Visibility", desc: "You cannot see accurate sales, stock movements, or employee performance metrics without visiting the office/clinic or calling multiple times." },
                    { title: "Fragile Document Retrieval", desc: "Important legal and operational documents are stored with random file names, causing panic and long delays during audits or critical case actions." }
                  ].map((item, idx) => (
                    <li key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="text-sm font-semibold text-slate-300 flex items-center gap-2 mb-1">
                        <span className="text-red-500 font-bold">✕</span> {item.title}
                      </div>
                      <p className="text-xs text-slate-500 pl-4 leading-relaxed font-light">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AFTER */}
              <div className="p-8 rounded-3xl bg-brand-blue/[0.02] border border-brand-blue/10 relative overflow-hidden shadow-[inset_0_1px_20px_rgba(37,99,235,0.05)]">
                <div className="absolute top-0 right-0 bg-brand-blue/20 text-brand-blue text-[10px] font-mono px-4 py-1.5 rounded-bl-xl uppercase tracking-wider font-bold">
                  Operational Intelligence (After)
                </div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  Your AI-Supercharged Operating System
                </h3>
                <ul className="space-y-4">
                  {[
                    { title: "Zero-Leak Lead Intake", desc: "Inquiries are auto-logged instantly, automatically summarized by AI, and follow-up templates are queued up to ensure no deal is missed." },
                    { title: "Instant, Real-Time BI Dashboards", desc: "Daily looker-style dashboards update automatically and securely without staff intervention, making actual performance visible contextually." },
                    { title: "Centralized Customer CRM", desc: "A clean database holding client details, transaction status (New / Won / Ongoing), next action dates, and files in one easy place." },
                    { title: "Live Stock & Sales Tracking Alerts", desc: "Automatic low-stock alerts and daily transactional reports delivered in a simple text, keeping stock levels optimal." },
                    { title: "Intelligent Case / Document Finder", desc: "Properly index, link, and quickly find any necessary document or file within seconds with clean directory structuring." }
                  ].map((item, idx) => (
                    <li key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="text-sm font-semibold text-white flex items-center gap-2 mb-1">
                        <span className="text-brand-emerald font-bold">✓</span> {item.title}
                      </div>
                      <p className="text-xs text-slate-400 pl-4 leading-relaxed font-light">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT I HELP WITH SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mx-auto mb-6">Expertise</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How I help your business grow</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              I do not just build tools. I improve how your business works through four strategic pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI-Enabled Operational Systems',
                icon: <Bot className="w-8 h-8 text-brand-blue" />,
                desc: 'Systems that reduce repetitive admin work and help the business run more smoothly.',
                examples: ['Client intake systems', 'Case/document tracking', 'AI-assisted admin workflows', 'Appointment booking flows']
              },
              {
                title: 'Workflow Automation',
                icon: <Zap className="w-8 h-8 text-brand-emerald" />,
                desc: 'Automations that connect your scattered tools into a seamless information flow.',
                examples: ['Form to database to email', 'Inquiry to follow-up reminder', 'Booking to calendar event', 'Low-stock alerts']
              },
              {
                title: 'Business Dashboards & Reporting',
                icon: <BarChart3 className="w-8 h-8 text-brand-purple" />,
                desc: 'Dashboards that help owners see what is happening without waiting for manual reports.',
                examples: ['Sales & revenue tracking', 'Inventory intelligence', 'Team activity reports', 'Branch performance dashboards']
              },
              {
                title: 'Digital Systems Strategy',
                icon: <Network className="w-8 h-8 text-white" />,
                desc: 'Strategic consultation to understand what your business actually needs before building.',
                examples: ['Workflow audits', 'Systems diagnostics', 'Automation roadmaps', 'Tool stack reviews']
              }
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-brand-blue/30 transition-all group"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-slate-400 font-light mb-6">{pillar.desc}</p>
                <ul className="space-y-2">
                  {pillar.examples.map(ex => (
                    <li key={ex} className="flex items-center space-x-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP OFFER SECTION */}
      <section className="py-24 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="section-label mx-auto mb-6">Our Flagship Offer</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              The AI Business Operations System
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto font-light text-base md:text-lg leading-relaxed">
              Our ultimate, unified system tailored specifically for your operational DNA. We replace scattered files and fragmented manual routines with a single, secure, and privacy-conscious operational cockpit.
            </p>
          </div>

          <div className="p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-soft-black to-white/[0.01] border border-brand-blue/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-brand-blue/20 text-brand-blue text-xs font-mono px-6 py-2.5 rounded-bl-3xl uppercase tracking-widest font-bold border-l border-b border-brand-blue/30">
              Complete Built-For-You Blueprint
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Key Features List */}
              <div className="lg:col-span-7 space-y-8">
                <div className="border-b border-white/5 pb-4">
                  <h4 className="text-brand-blue text-xs font-mono uppercase tracking-[0.2em] mb-2">Core Architecture</h4>
                  <h3 className="text-2xl font-bold text-white">What's Included In Your Custom System</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Lead Capture Intake", desc: "Automated web/chat form widgets that capture and categorize every customer inquiry cleanly." },
                    { title: "Centralized CRM Tracker", desc: "A simple, clean database tracking customer profiles, status (New/Won/Lost), and history." },
                    { title: "WhatsApp & Email Flows", desc: "Instantly trigger personalized confirmation alerts and follow-up sequences automatically." },
                    { title: "Daily Sales & Activity Logger", desc: "Extremely simple logging forms for your staff to record entries, stock changes, or operations with ease." },
                    { title: "Executive BI Dashboard", desc: "Looker-style real-time reports outlining sales numbers, branch performance, and staff velocity." },
                    { title: "AI-Powered Weekly Summaries", desc: "Receive automated weekly digests highlighting stock trends, sales highlights, and attention status." },
                    { title: "Team Collaboration Tracker", desc: "A clean dashboard mapping current tasks, owner assignments, and operation stages." },
                    { title: "SOPs & Staff Training", desc: "Detailed step-by-step Standard Operating Procedures and custom training videos to ensure adoption." }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex-shrink-0 flex items-center justify-center text-brand-blue text-xs font-bold mt-1">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{feat.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-emerald" /> Human-in-the-Loop Safeguards</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-emerald" /> 100% Data Ownership</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-emerald" /> Role-Based Access</span>
                </div>
              </div>

              {/* Right Column: Value Pitch & CTA Card */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-brand-blue/[0.03] border border-white/10 flex flex-col justify-between h-full relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-brand-blue/20 rounded-full blur-lg pointer-events-none" />
                
                <div className="space-y-6">
                  <div className="uppercase font-mono text-[10px] text-slate-400 bg-white/5 px-3 py-1 rounded inline-block tracking-wider">
                    Consultancy Scope
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Engineered to streamline your daily routines.
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    We sit down with you to diagnose your existing tool loops, document your SOPs, design clean database schemas, and deploy your operational hub.
                  </p>
                  
                  <div className="space-y-3 py-4 border-y border-white/5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Implementation Timeline</span>
                      <span className="text-white font-semibold">2 - 3 Weeks</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Optimization Cycle</span>
                      <span className="text-white font-semibold">Monthly Maintenance Option</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Integration Grounding</span>
                      <span className="text-brand-blue font-mono font-bold uppercase tracking-wider">Privacy-First</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn-primary w-full text-center flex items-center justify-center space-x-2 group py-3 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all"
                  >
                    <span>Book a Systems Diagnostic</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#examples" className="block text-center text-xs text-slate-400 hover:text-white transition-colors py-2 font-medium">
                    Or explore individual solutions below
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE SYSTEMS SECTION */}
      <section id="examples" className="py-24 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mx-auto mb-6">Solutions Gallery</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Example Systems I Can Build</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Each system is customized to your specific operational DNA and growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Client Intake & Follow-Up',
                for: 'Law firms, clinics, consultants, agencies',
                features: ['Capture leads via form/web', 'Clean client database', 'Status tracking (New/Won/Lost)', 'Automated follow-ups']
              },
              {
                title: 'Sales & Inventory Intelligence',
                for: 'Retailers, pharmacists, food brands',
                features: ['Real-time stock movement', 'Low-stock flags', 'Weekly sales summaries', 'Fast-moving item analysis']
              },
              {
                title: 'NGO & Chapter Reporting Dashboard',
                for: 'NGOs, community programs, youth movements',
                features: ['Field activity collection', 'Beneficiary/Event tracking', 'Stakeholder dashboards', 'Evidence organization']
              },
              {
                title: 'Agribusiness Traceability Lite',
                for: 'Honey brands, agri-processors,aggregators',
                features: ['Source/Farmer tracking', 'Batch & batch history', 'QR-code linked info', 'Customer trust verification']
              },
              {
                title: 'Document & Case Tracker',
                for: 'Lawyers, accountants, service pros',
                features: ['Deadline management', 'Linked document storage', 'Quick retrieval systems', 'Next action tracking']
              },
              {
                title: 'AI Admin Assistant Setup',
                for: 'Solo founders, small teams, professionals',
                features: ['Reusable prompt engineering', 'Email & report drafting', 'Meeting summary automation', 'SOP structure creation']
              }
            ].map((system, i) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col p-8 rounded-3xl bg-soft-black border border-white/10 hover:border-brand-blue/30 transition-all h-full"
              >
                <div className="flex-grow">
                  <div className="text-[10px] font-mono text-brand-blue tracking-widest uppercase mb-4 opacity-70">
                    Best for: {system.for}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
                    {system.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {system.features.map(f => (
                      <li key={f} className="flex items-start space-x-3 text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label mb-6">Target Segments</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Who We Build For</h2>
              <p className="text-slate-300 font-light leading-relaxed mb-8">
                We design operational systems for businesses and organizations that are ready to replace manual chaos with professional, highly adoption-friendly operating structures.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Clinics & Service Businesses",
                    desc: "Medical centers, wellness clinics, and personal services needing clean patient intake forms, automated SMS/email booking confirmations, and streamlined scheduling flow."
                  },
                  {
                    title: "Consultants, Trainers, Law Firms & Agencies",
                    desc: "High-value professional practices that rely heavily on impeccable lead response, client onboarding steps, deadline trackers, and secure centralized document records."
                  },
                  {
                    title: "Inventory-Based SMEs & Distributors",
                    desc: "Hardware stores, pharmacies, phone shops, furniture sellers, honey/agri processors, and distributors needing to track real-time stock alerts and automate daily order follow-up."
                  },
                  {
                    title: "NGOs, CBOs, County Chapters & Outreach Programs",
                    desc: "Firms and grassroots networks structured around regional activity field capture, beneficiary tracking databases, evidence storage, and live reporting boards."
                  }
                ].map((seg, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-brand-blue/20 transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">{seg.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">{seg.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <Users className="w-6 h-6 text-brand-blue mb-4" />
                  <h4 className="text-white font-bold mb-2">Team Efficiency</h4>
                  <p className="text-xs text-slate-500">Remove friction and clarify daily routines.</p>
                </div>
                <div className="p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                  <Target className="w-6 h-6 text-brand-blue mb-4" />
                  <h4 className="text-white font-bold mb-2">Lead Conversion</h4>
                  <p className="text-xs text-slate-500">Stop losing deals to slow or missing follow-ups.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
                  <LineChart className="w-6 h-6 text-brand-purple mb-4" />
                  <h4 className="text-white font-bold mb-2">Data Visibility</h4>
                  <p className="text-xs text-slate-500">See your active client pipelines & stock levels instantly.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <ShieldCheck className="w-6 h-6 text-slate-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Process Control</h4>
                  <p className="text-xs text-slate-500">Maintain high operational quality as your brand expands.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW THE PROCESS WORKS SECTION */}
      <section className="py-24 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mx-auto mb-6">Methodology</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Implementation Framework</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Systems Diagnostic', desc: 'Understanding your workflow, pain points, and current tool landscape.' },
              { step: '02', title: 'Workflow Mapping', desc: 'Mapping how info moves: leads, sales, stock, and team tasks.' },
              { step: '03', title: 'System Recommendation', desc: 'Designing the simplest technical solution that solves the problem.' },
              { step: '04', title: 'Build & Integrate', desc: 'Rapid building using modern, low-friction integration platforms and automation systems.' },
              { step: '05', title: 'Train & Refine', desc: 'Providing SOPs and training to ensure adoption and business impact.' }
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-4xl font-display font-medium text-white/5 mb-4">{s.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{s.desc}</p>
                {i < 4 && <div className="hidden md:block absolute top-6 -right-4 w-8 h-px bg-white/10" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. START SIMPLE SECTION */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Start Simple, Scale Later.</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-12 text-lg">
              Not every business needs a complex custom application immediately. We focus on high-impact wins first.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
                  <Rocket className="w-5 h-5 text-brand-blue" />
                  <span>Phase 1: Win Now</span>
                </h4>
                <ul className="space-y-2 text-sm text-slate-500 font-light">
                  <li>• Smart Forms & Inquiries</li>
                  <li>• Connected Spreadsheets</li>
                  <li>• Sales & Stock Dashboards</li>
                  <li>• Automated Reminders</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-brand-purple" />
                  <span>Phase 2: Scale Future</span>
                </h4>
                <ul className="space-y-2 text-sm text-slate-500 font-light">
                  <li>• AI Management Agents</li>
                  <li>• Custom Client Portals</li>
                  <li>• Multi-System Integrations</li>
                  <li>• Advanced Analytics Layers</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST & SECURITY SECTION */}
      <section className="py-24 bg-white/2 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label mb-6">Security & Ethos</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Operational Trust & Responsible AI
              </h2>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                Bringing modern intelligence into your business demands strict compliance, process control, and impeccable guardrails. We treat privacy and security as integral design components, not afterthoughts.
              </p>
              <p className="text-slate-400 font-normal leading-relaxed mb-8">
                Every business operating system we build is designed with trust signals that protect your company, your staff, and your customers:
              </p>
              <div className="space-y-4">
                {[
                  { title: "No Public Model Exposure", desc: "We deploy secure endpoints and sandboxed instances. Your proprietary customer logs, CRM records, and business databases are never used to train public models." },
                  { title: "Strict Access Controls", desc: "Granular login credentials and split-view permissions mean that front-desk staff, field coordinators, and directors only access resources suited for their specific roles." },
                  { title: "Human-Supervised Automation", desc: "We believe in human-in-the-loop approvals. AI summarizes leads, flags stocks, and drafts communications—but your team retains final click authority before anything goes live." },
                  { title: "Frictionless Local Compliance", desc: "Designed around strict local data protection principles (including the Kenyan Data Protection Act) to ensure citizen privacy and document safety are fully respected." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-bold text-base">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-normal font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="p-8 rounded-3xl bg-soft-black border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-emerald/10 text-brand-emerald text-[10px] font-mono px-4 py-1 rounded-bl-xl uppercase tracking-wider font-semibold">
                  Secure Architecture
                </div>
                
                <h3 className="text-lg font-bold text-white mb-6">Built-in Compliance Checklist</h3>
                <div className="space-y-4">
                  {[
                    "Isolated cloud storage with 2FA/Multi-factor authentication",
                    "No persistent caching of client text or chats on third-party servers",
                    "Clear audit logging showing who modified what data",
                    "Proper encryption of keys, tokens, and active databases",
                    "Simple, easy-to-use human override triggers on all automated messages"
                  ].map((chk, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald flex-shrink-0 text-xs font-bold">✓</div>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-xs text-slate-500 italic leading-relaxed">
                  "By coupling automated intelligence with granular privacy controls, we prove that SMEs do not have to compromise customer safety to scale operational efficiency."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SELLABLE OFFERS SECTION */}
      <section className="py-24 bg-white/2 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label mx-auto mb-6">Engagement</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ways We Can Work Together</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Systems Diagnostic', badge: 'One-Time', desc: 'A paid review of your workflows, tools, and automation gaps.' },
              { title: 'Inquiry Systems', badge: 'Project', desc: 'Practical setup for capturing and improving lead follow-up.' },
              { title: 'Operations BI', badge: 'Custom', desc: 'Building custom dashboards for sales, stock, or team activities.' },
              { title: 'Strategy Retainer', badge: 'Monthly', desc: 'Ongoing systems advisory, updates, and workflow maintenance.' }
            ].map(offer => (
              <div key={offer.title} className="p-8 rounded-3xl bg-soft-black border border-white/5 flex flex-col items-center text-center">
                <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest mb-4 opacity-70 border border-brand-blue/30 px-2 py-1 rounded">
                  {offer.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{offer.title}</h3>
                <p className="text-sm text-slate-500 font-light mb-8">{offer.desc}</p>
                <div className="mt-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-blue text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center space-x-1">
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-xs text-slate-600 font-mono italic">
            * Pricing depends on operational complexity and integration requirements.
          </div>
        </div>
      </section>

      {/* 9. WHY SILATECH SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-12 rounded-[3rem] bg-brand-blue/5 border border-brand-blue/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Silatech Growth Partners?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  { title: 'Strategic Depth', desc: 'Combining leadership, digital strategy, and IT operations backround.' },
                  { title: 'Practical First', desc: 'We build systems that people actually use, not complex tools that fail.' },
                  { title: 'Africa-Aware', desc: 'Understanding local SME constraints and operational realities.' },
                  { title: 'Scale Ready', desc: 'Built on architectures that can grow with your organization.' },
                  { title: 'Adoptable Tech', desc: 'Focusing on low-friction, cloud-based integration and automation ecosystems.' },
                  { title: 'BI Focused', desc: 'Turning "silent" business data into visible, actionable insights.' }
                ].map(point => (
                  <div key={point.title}>
                    <h4 className="text-white font-bold mb-2 flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-brand-blue" />
                      <span>{point.title}</span>
                    </h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-white mx-auto mb-8 text-glow animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight font-display">
              Reduce manual work. <br />Improve how you run.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-3 w-full sm:w-auto justify-center group"
              >
                <span>Book a Systems Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center space-x-3 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5 h-5 text-brand-blue" />
                <span>Ask for an Example</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSystemsPage;
