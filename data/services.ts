export type Service = {
  slug: string; title: string; shortTitle: string; intro: string; description: string;
  question: string; starting: string; improving: string;
  deliverables: { title: string; copy: string }[];
  examples: string[]; boundaries: string; project: string; related: string[];
};
export const services: Service[] = [
  {
    slug: 'technology-strategy-adoption', title: 'Technology Strategy & Adoption', shortTitle: 'Choose with confidence',
    intro: 'Make a clear plan before choosing another tool.',
    description: 'Practical technology advice, tool selection, implementation roadmaps and adoption support for businesses and organisations at any starting point.',
    question: 'Where should we start—and what is actually worth investing in?',
    starting: 'We help define the essentials: a professional digital presence, reliable communication, organised records and tools people can learn. You do not need an existing system or a technical brief.',
    improving: 'We review how your current tools, costs and routines fit together, identify duplication and gaps, and prioritise changes before you commit to more software.',
    deliverables: [
      { title: 'Discovery and technology review', copy: 'A shared picture of your goals, people, current practices, constraints and information needs. Where tools exist, we review their role rather than assuming they need replacement.' },
      { title: 'Options and a practical roadmap', copy: 'A comparison of suitable options with costs, dependencies, ownership and implementation steps. Existing software comes first when it can solve the problem well.' },
      { title: 'Adoption and handover plan', copy: 'A rollout approach that includes staff involvement, access responsibilities, usable guidance and review points. Success includes whether people can use and maintain the result.' },
    ],
    examples: ['First digital setup for a new professional practice', 'A review of overlapping subscriptions and scattered records', 'A phased technology roadmap for a nonprofit or established business'],
    boundaries: 'Recommendations depend on discovery and the evidence available. We do not promise guaranteed savings, independent security certification or a complete organisational transformation from a single consultation.',
    project: 'beeepic-wisdom-mapper', related: ['business-platforms-integrations', 'data-dashboards-decision-support'],
  },
  {
    slug: 'business-platforms-integrations', title: 'Business Platforms & Integrations', shortTitle: 'Make your tools work together',
    intro: 'Set up the essentials. Connect the work between them.',
    description: 'Business platform setup, configuration and integration support across collaboration tools, CRM systems, forms and operational records.',
    question: 'Can our everyday platforms work as one clearer workflow?',
    starting: 'We help choose and configure a sensible foundation for communication, files, contacts, intake and customer follow-up. Account ownership and staff access are part of the setup.',
    improving: 'We examine existing platforms such as Google Workspace, Microsoft 365, GoHighLevel and other CRM or SaaS tools, then scope configuration improvements and useful connections.',
    deliverables: [
      { title: 'Platform configuration', copy: 'A scoped setup of the records, stages, forms, shared spaces and permissions your work needs. We prefer dependable use of existing features before adding custom infrastructure.' },
      { title: 'Connected workflows', copy: 'Map how information moves between tools, agree the source of truth, and implement supported connections with clear error handling and ownership.' },
      { title: 'Migration and operating guidance', copy: 'Plan record cleanup, mapping and a controlled transition where needed. Document recurring tasks, access responsibilities and what to do when an integration needs attention.' },
    ],
    examples: ['Client intake connected to a CRM and team follow-up', 'A shared workspace for files, records and responsibilities', 'Connecting website enquiries to a structured customer record'],
    boundaries: 'Integration feasibility depends on platform APIs, subscription tiers, permissions and data quality. We confirm these during scoping. Platform names describe possible client tools, not formal partnerships or certifications.',
    project: 'asili-business-helper', related: ['technology-strategy-adoption', 'ai-workflow-automation'],
  },
  {
    slug: 'ai-workflow-automation', title: 'AI, Agents & Workflow Automation', shortTitle: 'Reduce repetitive work',
    intro: 'Practical automation, with people in control.',
    description: 'AI-assisted workflows, scoped agents and business automation with human review, defined permissions, testing and fallback behaviour.',
    question: 'Which repetitive tasks can we simplify without losing oversight?',
    starting: 'We first establish a clear workflow and usable records. A template, form or simple rule may be the right first step before an AI model or agent is justified.',
    improving: 'We identify repeatable tasks in your existing operations and assess whether rules, integrations or bounded AI assistance can improve them without adding unnecessary risk.',
    deliverables: [
      { title: 'Workflow and suitability assessment', copy: 'Define the task, information involved, expected output and human responsibility. We distinguish predictable automation from tasks that require judgement or approval.' },
      { title: 'A bounded implementation', copy: 'Scope assistance such as drafting, classification, summaries or multi-step tool use. Agent permissions, approved actions and escalation points are defined for the engagement.' },
      { title: 'Evaluation and operating guidance', copy: 'Test representative inputs and failure cases, agree review criteria, document limitations and provide a fallback route. Staff learn when to trust, check or stop the workflow.' },
    ],
    examples: ['Assessment summaries with a rules-based fallback', 'Internal admin assistance with approval before external messages', 'Reminders and task routing connected to structured records'],
    boundaries: 'AI can produce incorrect output. Sensitive data, external communication and consequential actions need appropriate controls. Model usage, messaging access and third-party costs are scoped separately; unattended autonomy is not assumed.',
    project: 'beeepic-wisdom-mapper', related: ['business-platforms-integrations', 'data-dashboards-decision-support'],
  },
  {
    slug: 'data-dashboards-decision-support', title: 'Data, Dashboards & Decision Support', shortTitle: 'See what matters',
    intro: 'Turn scattered information into a clearer operating picture.',
    description: 'Data organisation, reporting workflows, dashboards and decision support built around useful questions, reliable records and clear metric definitions.',
    question: 'What do we need to know to make a better decision?',
    starting: 'We help define what to record, how to collect it consistently and which questions matter first. A useful reporting foundation can start with a well-designed spreadsheet or collection form.',
    improving: 'We review your existing records, reporting routines and definitions, then connect suitable sources into views that make activity, exceptions and next actions easier to understand.',
    deliverables: [
      { title: 'Data and metric foundations', copy: 'Agree definitions, collection responsibilities and sources of truth. Review missing values, duplication and access so a dashboard does not simply make unreliable data look convincing.' },
      { title: 'Reporting and dashboard views', copy: 'Create scoped views for sales, operations, programme activity or other agreed questions. Show context and useful exceptions rather than adding charts without a decision behind them.' },
      { title: 'A repeatable reporting routine', copy: 'Document refresh steps, ownership, interpretation and known limitations. Include exports or scheduled summaries where supported and train the people responsible for keeping records useful.' },
    ],
    examples: ['An owner view across orders, stock and payments', 'Consistent activity and evidence collection for a nonprofit', 'A management report that replaces repeated copying between files'],
    boundaries: 'Reporting quality depends on the underlying data and update practices. We distinguish observed records from estimates and do not imply audited financial reporting, causal impact or predictive accuracy without supporting evidence.',
    project: 'asili-business-helper', related: ['business-platforms-integrations', 'technology-strategy-adoption'],
  },
  {
    slug: 'websites-digital-growth', title: 'Websites & Digital Growth Infrastructure', shortTitle: 'Build a useful digital presence',
    intro: 'A clear digital front door, connected to what happens next.',
    description: 'Websites, SEO foundations, analytics, digital content and connected enquiry journeys for businesses and organisations starting or improving their online presence.',
    question: 'Can people understand us, find us and take the next step?',
    starting: 'We help shape your proposition, structure essential content and build a professional website with clear contact pathways. The foundation includes mobile usability, accessibility and discoverable pages.',
    improving: 'We review your existing website and customer journey, improve content and technical foundations, and connect enquiries to the tools and routines that support follow-up.',
    deliverables: [
      { title: 'Positioning and content structure', copy: 'Translate your offer into a clear navigation, page hierarchy and enquiry journey. Scope copy and digital media around the information visitors need to make a decision.' },
      { title: 'Website and search foundations', copy: 'Build or improve responsive pages, metadata, internal links, crawlable content and relevant structured data. Performance and accessibility are considered throughout implementation.' },
      { title: 'Measurement and connected enquiries', copy: 'Configure agreed analytics and contact pathways, distinguish clicks from confirmed outcomes, and document ownership of the website, domain and connected services.' },
    ],
    examples: ['A first website for a founder or professional firm', 'A service website with clear project enquiry pathways', 'A product website connected to ordering and customer records'],
    boundaries: 'SEO and analytics provide foundations for learning and improvement; they do not guarantee rankings, sales or conversion increases. Hosting, domains, paid media and ongoing content work are agreed in the project scope.',
    project: 'asili-business-helper', related: ['business-platforms-integrations', 'custom-applications-digital-products'],
  },
  {
    slug: 'custom-applications-digital-products', title: 'Custom Applications & Digital Products', shortTitle: 'Build what your work needs',
    intro: 'Purposeful software when existing tools are not enough.',
    description: 'Scoped custom applications, internal tools, portals and product prototypes with clear user journeys, ownership, testing and staged delivery.',
    question: 'Does this need a custom product—and what should the first version do?',
    starting: 'We help clarify the user problem, examine existing options and define a focused prototype or first release. You can bring an idea rather than a finished specification.',
    improving: 'We map the gaps in your existing workflow or product and scope a maintainable tool, interface or extension that addresses them without rebuilding what already works.',
    deliverables: [
      { title: 'Discovery and product scope', copy: 'Define users, key journeys, domain rules and the smallest useful release. Make assumptions, dependencies and deferred work explicit before choosing the implementation approach.' },
      { title: 'Prototype or application delivery', copy: 'Design and implement agreed interfaces, data flows and functionality in reviewable stages. A prototype validates an experience; production delivery requires its own operational scope.' },
      { title: 'Testing, ownership and handover', copy: 'Agree acceptance criteria and document the implementation, access and deployment responsibilities. Discuss maintenance and ongoing improvement before the project is handed over.' },
    ],
    examples: ['An internal operational tool or client portal', 'A structured assessment and recommendation product', 'An interactive member and coach product prototype'],
    boundaries: 'Authentication, production hosting, cloud persistence, monitoring and support are included only when explicitly scoped. Prototype screens do not imply a launched service or production-ready infrastructure.',
    project: 'stawi', related: ['technology-strategy-adoption', 'websites-digital-growth'],
  },
];
export const getService = (slug?: string) => services.find(service => service.slug === slug);