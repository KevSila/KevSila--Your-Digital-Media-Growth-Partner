import { ArrowUpRight, BarChart3, Bot, ClipboardList, Globe2, MessageCircleMore, Route } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: MessageCircleMore, title: 'WhatsApp lead capture & CRM', problem: 'Inquiries disappear inside busy chats.', result: 'Capture each lead, track its status, and make the next follow-up visible.' },
  { icon: Bot, title: 'AI sales & admin workflows', problem: 'Your team repeats the same replies and admin tasks.', result: 'Draft responses, classify inquiries, summarize records, and support faster action.' },
  { icon: BarChart3, title: 'Dashboards & automated reporting', problem: 'Decisions wait for scattered or late reports.', result: 'Turn organized data into clear sales, activity, stock, or impact visibility.' },
  { icon: ClipboardList, title: 'Client intake & appointment systems', problem: 'Bookings, forms, and next steps are inconsistent.', result: 'Create a dependable journey from first inquiry to confirmation and follow-up.' },
  { icon: Globe2, title: 'Websites connected to growth', problem: 'A beautiful website does not capture or organize demand.', result: 'Connect landing pages to WhatsApp, forms, analytics, and a lead tracker.' },
  { icon: Route, title: 'Systems diagnostics & workflow design', problem: 'Buying more software will not fix an unclear process.', result: 'Map the bottleneck, choose the right tools, and build a practical roadmap.' },
];

const Services = () => (
  <section id="solutions" className="soft-noise bg-cloud py-24 text-ink sm:py-32">
    <div className="shell">
      <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="eyebrow">What we build</span><h2 className="section-title mt-5 !text-ink">Practical systems that improve how your business works.</h2></div>
        <p className="body-lg max-w-2xl text-slate-600 lg:justify-self-end">We start with the business problem—not the software. Every solution is designed around the people, tools, and routines you already have.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return <article key={service.title} className="card-light group p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b9cdf3]">
            <div className="mb-8 flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf0ff] text-cobalt"><Icon className="h-5 w-5" /></span><span className="font-display text-sm font-bold text-slate-300">0{index + 1}</span></div>
            <h3 className="text-xl font-bold !text-ink">{service.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">{service.problem}</p>
            <div className="mt-6 border-t border-slate-100 pt-5"><p className="text-sm font-semibold leading-6 text-slate-700">{service.result}</p></div>
          </article>;
        })}
      </div>
      <div className="mt-10 flex justify-center"><Link to="/business-systems-automation" className="btn-dark">Explore all systems <ArrowUpRight className="h-4 w-4" /></Link></div>
    </div>
  </section>
);

export default Services;
