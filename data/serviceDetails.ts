export type ServiceDetail = { headline: string; problems: string[]; technologies: string; benefits: string[]; audience: string; evidence: string };
// Named platforms are scoping options, not claims of partnership or completed deployments.
export const serviceDetails: Record<string, ServiceDetail> = {
  'technology-strategy-adoption': {
    headline: 'Choose the right technology. Plan a practical path to adoption.',
    problems: ['Uncertainty about which tools to adopt first or replace.', 'Overlapping subscriptions and unclear ownership.', 'Technology purchases that do not fit staff routines or business priorities.'],
    technologies: 'We compare collaboration, CRM, workflow and reporting options against your requirements. Google Workspace, Microsoft 365, GoHighLevel, Airtable and Power BI may be considered where relevant. Evaluation includes subscription tiers, data access, connectivity and the capacity to maintain the result.',
    benefits: ['A prioritised sequence of decisions and implementation work.', 'Visibility into dependencies, recurring costs and responsibilities.', 'A rollout plan that accounts for people and adoption.'],
    audience: 'Solo founders establishing essentials, professional firms reviewing their tools, nonprofits planning an information system, and established organisations considering a new initiative.',
    evidence: 'BeeEPiC WISDOM Mapper illustrates structured discovery and recommendations. It is evidence of that workflow, not a claim that every platform under consideration has been implemented.'
  },
  'business-platforms-integrations': {
    headline: 'Connect your platforms to the way your business works.',
    problems: ['Contacts, files and customer activity scattered across tools.', 'Repeated data entry between forms, messages and business records.', 'Unclear handoffs, access permissions or sources of truth.'],
    technologies: 'Depending on the requirement, work can involve Google Workspace or Microsoft 365 for collaboration, GoHighLevel or another CRM for customer workflows, Airtable for structured records, and supported APIs or webhooks for connections. Platform choice and connector feasibility are assessed before commitment.',
    benefits: ['A clearer flow from enquiry or task intake to follow-up.', 'Defined record ownership and fewer ambiguous handoffs.', 'Documented operating and exception-handling routines.'],
    audience: 'Businesses setting up their first shared workspace or CRM, teams improving an existing software stack, and organisations coordinating customer or programme records.',
    evidence: 'Asili demonstrates a connected ordering and operational-record workflow. The listed commercial platforms are possible client tools, not a claim that Asili runs on those products.'
  },
  'ai-workflow-automation': {
    headline: 'Reduce repetitive work with automation you can oversee.',
    problems: ['Time spent preparing similar summaries or transferring information.', 'Tasks that stall because routing or follow-up is inconsistent.', 'AI experiments without clear inputs, review criteria or action limits.'],
    technologies: 'The implementation may use platform-native rules, supported integrations, APIs and bounded language-model assistance. Agents are scoped around approved tools and actions. We choose predictable rules when they solve the task and assess model costs and data handling before introducing AI.',
    benefits: ['A more consistent workflow with visible exceptions.', 'Human review focused on decisions that need judgement.', 'Testable behaviour and a documented fallback when assistance fails.'],
    audience: 'Small teams, professional practices and organisations with repeatable administrative workflows, as well as businesses exploring a first responsible AI pilot.',
    evidence: 'BeeEPiC WISDOM Mapper combines structured recommendation logic with constrained AI enhancement and fallback behaviour. Broader agent use cases require their own discovery and validation.'
  },
  'data-dashboards-decision-support': {
    headline: 'Organise your data. Make business decisions with clearer context.',
    problems: ['Reports assembled by repeatedly copying between files.', 'Conflicting definitions or incomplete operational records.', 'Dashboards that show activity without explaining the next decision.'],
    technologies: 'A solution may begin with spreadsheets, forms or structured Airtable records, then use supported database connections and reporting tools such as Power BI where justified. Source access, refresh requirements, licensing and metric definitions are assessed before selecting the reporting layer.',
    benefits: ['A shared understanding of what each measure represents.', 'Useful views of activity, exceptions and follow-up needs.', 'A reporting routine with named owners and known limitations.'],
    audience: 'Owners seeking operational visibility, nonprofits organising programme information, and teams building their first report or improving an established reporting routine.',
    evidence: 'Asili provides evidence of owner-facing order, stock, payment and sales views. Power BI and Airtable are scoping options; this case study does not establish a deployment on either platform.'
  },
  'websites-digital-growth': {
    headline: 'Build a clear online presence that supports business enquiries.',
    problems: ['Visitors cannot quickly understand the offer or next step.', 'A first business website is needed, or an existing site is difficult to use.', 'Search, analytics and enquiry follow-up are disconnected.'],
    technologies: 'We assess an appropriate website platform or custom frontend, then scope responsive content, technical SEO, crawlable pages, analytics and connected forms or contact links. Google Analytics and Search Console can support measurement and search foundations when configured for the engagement.',
    benefits: ['A clearer explanation of your services and credibility.', 'A mobile-friendly journey from discovery to enquiry.', 'Measurement foundations for learning what visitors use.'],
    audience: 'Founders, service businesses, professional firms and nonprofits establishing a digital presence, plus organisations improving an existing website and customer journey.',
    evidence: 'Asili demonstrates a public website connected to ordering and operational records. Website, SEO and analytics work establishes a foundation; it does not guarantee traffic, rankings or sales.'
  },
  'custom-applications-digital-products': {
    headline: 'Turn a specific business need into a focused digital product.',
    problems: ['Existing products do not fit an important workflow.', 'A product idea needs a testable scope before larger investment.', 'An internal tool or client portal needs clear users, rules and ownership.'],
    technologies: 'Custom work may use a React and TypeScript interface, suitable APIs and a scoped data layer. Architecture follows requirements for access, persistence, hosting and maintenance. We assess existing products first and distinguish an interactive frontend prototype from a production application.',
    benefits: ['A focused first release rather than an undefined feature list.', 'Early review of real user journeys and domain rules.', 'Explicit acceptance criteria, maintenance needs and deferred work.'],
    audience: 'Founders exploring a new product, teams with distinctive internal workflows, and organisations that need an application beyond the capabilities of their existing platforms.',
    evidence: 'Stawi demonstrates interactive member and coach workflows, device-local workout history and a member Progress view. Authentication, cloud sync and production backend services remain outside its current prototype scope.'
  },
};