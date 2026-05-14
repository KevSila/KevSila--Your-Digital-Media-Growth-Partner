
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
            className="text-5xl md:text-7xl font-display font-medium leading-[1.1] tracking-tight text-white mb-8 max-w-4xl mx-auto"
          >
            AI-Powered Business Systems That Help Your <span className="text-glow">Business Work Better</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Silatech Growth Partners helps SMEs, professionals, and growing organizations reduce manual work, improve follow-up, organize data, and make better decisions using AI-powered workflows, dashboards, automations, and practical business systems.
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
            <span>Built for businesses that rely on leads, records, follow-ups, and daily operations.</span>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-white/2 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label mb-6">The Gap</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Your business may already have tools — but are they working together?
              </h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8">
                Most SMEs and professional firms use a mix of tools like WhatsApp, Excel, POS systems, accounting software, and paper records. But when these tools don't talk to each other, you face:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Forgotten follow-ups',
                  'Manual, slow reporting',
                  'Scattered client data',
                  'Delayed stock updates',
                  'Lack of management visibility',
                  'Hard-to-retrieve documents'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-sm text-slate-300">
                    <AlertCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
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
                    <span className="text-sm font-mono text-slate-400">Manual Processes</span>
                    <span className="text-xs px-2 py-1 bg-red-500/10 text-red-500 rounded uppercase font-bold tracking-wider">High Friction</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-white rotate-90" />
                  </div>
                  <div className="p-4 bg-brand-blue/10 rounded-xl border border-brand-blue/20 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Connected Intelligence</h3>
                    <p className="text-sm text-slate-400 font-light">Turn scattered tools into a unified, clear, and usable business system.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-soft-black border border-white/10 rounded-2xl shadow-2xl">
                <p className="text-sm font-medium text-white italic">"Silatech helps turn scattered tools and manual processes into clear, connected, usable business systems."</p>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Built for businesses that need better operations.</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-6">
                I help organizations that are ready to scale or simplify. Many of these businesses already have tools, but they don't talk to each other. I help improve the flow and visibility.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Law Firms', 'Clinics', 'Hardware Stores', 'Pharmacies', 
                  'Agribusiness', 'Consultancies', 'NGOs & CBOs', 'County Chapters',
                  'Funiture Shops', 'Real Estate', 'Scaling Startups', 'SMEs'
                ].map(item => (
                  <div key={item} className="flex items-center space-x-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <Users className="w-6 h-6 text-brand-blue mb-4" />
                  <h4 className="text-white font-bold mb-2">Team Efficiency</h4>
                  <p className="text-xs text-slate-500">Remove friction from daily routines.</p>
                </div>
                <div className="p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                  <Target className="w-6 h-6 text-brand-blue mb-4" />
                  <h4 className="text-white font-bold mb-2">Lead Conversion</h4>
                  <p className="text-xs text-slate-500">Stop losing business to poor follow-up.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
                  <LineChart className="w-6 h-6 text-brand-purple mb-4" />
                  <h4 className="text-white font-bold mb-2">Data Visibility</h4>
                  <p className="text-xs text-slate-500">See your business numbers clearly.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <ShieldCheck className="w-6 h-6 text-slate-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Process Control</h4>
                  <p className="text-xs text-slate-500">Maintain quality as you grow.</p>
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
