export type PortfolioProject = {
  slug: string;
  name: string;
  shortName: string;
  kicker: string;
  stage: string;
  summary: string;
  metaDescription: string;
  disciplines: string[];
  problem: string;
  philosophyTitle: string;
  philosophy: string;
  built: string[];
  value: string[];
  evidence: string[];
  next: string[];
  externalLinks?: { label: string; href: string }[];
  proofScreens?: { src: string; alt: string; label: string; caption: string }[];
  proofNote?: string;
  visual: 'asili' | 'beeepic' | 'stawi';
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'asili-business-helper',
    name: 'Asili — Business Helper & Traceability',
    shortName: 'Asili',
    kicker: 'Commerce · Operations · Traceability',
    stage: 'Living lab · Working system',
    summary:
      'Evolving a Kenyan honey brand from a product website into a connected business system for ordering, customer records, stock, payments, reporting, and future traceability.',
    metaDescription:
      'See how Silatech evolved Asili from a product website into a connected commerce and operations system with ordering, stock, payments, reporting, and traceability foundations.',
    disciplines: ['Business systems', 'Website & UX', 'Operations', 'Traceability'],
    problem:
      'A product website can create interest, but the business still needs a dependable way to turn that interest into orders, preserve customer and payment records, understand stock, and build trust around where the product came from. The challenge was to connect the customer journey with the operating records behind it without creating unnecessary ERP complexity.',
    philosophyTitle: 'Trust and operational clarity before complexity.',
    philosophy:
      'For Asili, technology is useful when it creates better evidence, a clearer customer journey, or stronger operational control. The system is designed to collect the information the business can actually use, then grow in stages as the underlying operations mature.',
    built: [
      'Refined the consumer website, honey product journey, and customer-facing information architecture.',
      'Connected public ordering to a structured operational data layer rather than leaving orders inside messages or form notifications.',
      'Built protected owner views for orders, inventory, customers, payment receipts, and sales visibility.',
      'Introduced a structured payment ledger and lifecycle notifications that preserve the order history instead of overwriting it.',
      'Developed a QR-linked batch-passport demonstration for communicating origin and product information.',
      'Created a staged roadmap for costs, reporting exports, richer traceability, customer self-service, and future operational evidence.'
    ],
    value: [
      'Moves the business closer to one operating picture across customers, orders, stock, and money received.',
      'Connects the public buying experience to the records the owner needs after an order is placed.',
      'Creates a practical living laboratory for Silatech SME systems work rather than a disconnected demo.',
      'Builds a foundation for future traceability, production-cost intelligence, funding evidence, and customer self-service.'
    ],
    evidence: [
      'Public Asili website and honey ordering flow are live.',
      'The working backend includes structured customers, products, variants, orders, order items, payments, inventory movement, and follow-up foundations.',
      'The owner workspace includes authenticated order, inventory, customer, and sales views.',
      'Traceability is currently demonstrated through a clearly labelled sample batch passport; richer production records remain a planned expansion.'
    ],
    next: [
      'Separate staging from production so preview testing cannot touch live operational data.',
      'Extend operations and cost records into the database and owner dashboard.',
      'Add configurable reporting/export packs and an evidence register.',
      'Expand batch traceability once real production, processing, quality, and certificate records are available.'
    ],
    externalLinks: [
      { label: 'Visit Asili', href: 'https://asilii.netlify.app' },
      { label: 'View batch passport', href: 'https://asilii.netlify.app/b/sample-2604-01' }
    ],
    proofScreens: [
      {
        src: '/portfolio/asili-order.jpg',
        alt: 'Asili public honey ordering interface showing jar selection and delivery details',
        label: 'Customer ordering',
        caption: 'A customer-facing order flow connects product selection and delivery details to structured order records.'
      },
      {
        src: '/portfolio/asili-dashboard.webp',
        alt: 'Asili Business Helper owner dashboard showing orders, sales, product variants and sales channels',
        label: 'Owner visibility',
        caption: 'The owner dashboard brings order status, sales, product variants, and sales-channel visibility into one operating view.'
      }
    ],
    proofNote: 'Selected screens show the working Asili experience while excluding customer-identifying records from the public case study.',
    visual: 'asili'
  },
  {
    slug: 'beeepic-wisdom-mapper',
    name: 'BeeEPiC WISDOM Mapper',
    shortName: 'WISDOM Mapper',
    kicker: 'Assessment · Decision support · AI-assisted recommendations',
    stage: 'Workflow product implementation',
    summary:
      'A structured business diagnostic that turns operating context, bottlenecks, delegation goals, and current systems into a clearer human-plus-AI support recommendation.',
    metaDescription:
      'Explore the BeeEPiC WISDOM Mapper case study: a structured diagnostic workflow for delegation priorities, systems recommendations, role design, and AI-assisted decision support.',
    disciplines: ['Workflow design', 'Decision support', 'AI-assisted UX', 'Operational data'],
    problem:
      'Delegation and support decisions can become subjective when business context, bottlenecks, current tools, urgency, and role options live in separate notes or conversations. The project needed a repeatable assessment flow that could structure those inputs and produce a useful recommendation without making AI a single point of failure.',
    philosophyTitle: 'AI should refine judgment, not erase the decision backbone.',
    philosophy:
      'The mapper was designed so useful recommendations can still exist when the AI enhancement layer is slow or unavailable. Structured business rules establish a dependable baseline; AI can then improve wording, context, and nuance while the final recommendation remains reviewable.',
    built: [
      'Structured a multi-step assessment around business context, delegation goals, bottlenecks, tasks, and current systems.',
      'Mapped inputs into delegation priorities, support-role recommendations, systems-first actions, responsibilities, and suggested KPIs.',
      'Added an AI enhancement layer with bounded changes rather than allowing the model to freely replace the recommendation.',
      'Designed results so the client can receive a readable blueprint while internal teams retain the supporting operational detail.',
      'Stored submissions and recommendation components as structured records instead of one-off narrative notes.',
      'Connected submission handling to internal notifications and client summary communication.'
    ],
    value: [
      'Makes business discovery more consistent and repeatable across different prospects.',
      'Turns a broad conversation about “needing help” into clearer priorities, roles, systems, and next actions.',
      'Preserves a reliable recommendation path when AI enhancement fails or times out.',
      'Creates reusable operational data that can support future review, service design, and decision-making.'
    ],
    evidence: [
      'The implemented workflow captures client information, business context, delegation goals, bottlenecks, tasks, and existing systems.',
      'Recommendation records include support roles, priorities, systems-first actions, responsibility summaries, human-in-the-loop opportunities, and KPIs.',
      'The application includes deterministic recommendation logic plus a constrained AI enhancement path with fallback behaviour.',
      'Submission handling includes structured storage plus internal and client email workflows.'
    ],
    next: [
      'Continue improving review visibility so internal teams can understand how each recommendation was produced.',
      'Strengthen observability, testing, versioning, and administrative controls as usage expands.',
      'Use accumulated structured assessments to identify recurring delegation and systems patterns without exposing individual client data.'
    ],
    proofScreens: [
      {
        src: '/portfolio/beeepic-blueprint.webp',
        alt: 'BeeEPiC WISDOM Delegation Blueprint showing recommended support and a client-facing systems summary',
        label: 'Recommendation blueprint',
        caption: 'The workflow turns structured assessment inputs into a client-readable delegation blueprint, with review controls kept separate from the client-facing output.'
      }
    ],
    proofNote: 'Because this was client work, the public case study intentionally shows only a limited, sanitized view of the delivered workflow.',
    visual: 'beeepic'
  },
  {
    slug: 'stawi',
    name: 'Stawi — Fitness & Wellbeing Platform',
    shortName: 'Stawi',
    kicker: 'Product strategy · Member experience · Coach visibility',
    stage: 'Product R&D · Alpha 0.6.0',
    summary:
      'A client-centred, trainer-connected fitness and wellbeing product exploring how training, nourishment, recovery, progress, and professional support can work as one coherent experience.',
    metaDescription:
      'Explore Stawi, a Silatech product R&D case study connecting member training, programmes, progress, recovery context, and trainer visibility in a mobile-first fitness experience.',
    disciplines: ['Product strategy', 'UX architecture', 'Fitness workflows', 'PWA prototype'],
    problem:
      'Workout plans, check-ins, meal context, progress notes, recovery signals, and trainer communication are often fragmented across chats, notebooks, spreadsheets, and separate apps. Members need continuity and direction, while trainers need evidence of what actually happened between sessions.',
    philosophyTitle: 'The client owns the journey. The trainer guides it. Stawi connects the context.',
    philosophy:
      'Stawi is deliberately broader than a workout tracker or coach administration tool. The member must receive standalone value, while a trainer relationship should add expertise, accountability, and programming without making the member a subordinate view of a coach dashboard.',
    built: [
      'Designed distinct member and coach workspaces around the same underlying programme and workout evidence.',
      'Built programme, workout-player, completion-summary, client, review, and attention flows in an interactive frontend prototype.',
      'Added a member-created workout path that remains separate from trainer-prescribed programme completion.',
      'Introduced durable local workout-session evidence so refreshes do not silently erase active or completed work.',
      'Separated workout completion from longer-period programme adherence so the product does not collapse different behaviours into one metric.',
      'Created an installable PWA shell and a structured exercise catalogue foundation for later product expansion.'
    ],
    value: [
      'Demonstrates how member independence and trainer visibility can coexist without duplicating the underlying evidence.',
      'Makes completed work, missed work, and attention needs easier to reason about than a chat-only coaching workflow.',
      'Creates a product foundation that can later support locally relevant nutrition, equipment, payment, and lower-data realities.',
      'Shows Silatech product thinking beyond workflow automation: information architecture, interaction design, domain rules, and product boundaries.'
    ],
    evidence: [
      'Current status is an interactive frontend Alpha 0.6.0 prototype rather than a production fitness service.',
      'Member and coach routes, workout tracking, programme views, completion evidence, and local persistence are implemented.',
      'Authentication, cloud persistence, real messaging, nutrition/recovery modules, and full production backend services are intentionally deferred.',
      'The product doctrine and technical roadmap explicitly preserve client agency while allowing trainer support when that relationship exists.'
    ],
    next: [
      'Introduce authentication and cloud persistence only when the prototype workflow is stable enough to justify it.',
      'Expand nutrition, recovery, progress, and local-food context around the Train · Nourish · Recover · Progress · Thrive model.',
      'Validate repeated use with trainers and members before committing to a larger production architecture.',
      'Add communication and coach review features without creating conflicting trainer-prescribed and self-directed workloads.'
    ],
    proofScreens: [
      {
        src: '/portfolio/stawi-member.webp',
        alt: 'Stawi member Today screen with training, programme adherence, nutrition context and coach message',
        label: 'Member Today',
        caption: 'The member workspace brings prescribed training, adherence evidence, nutrition context, and coach communication into one daily view.'
      },
      {
        src: '/portfolio/stawi-coach.webp',
        alt: 'Stawi coach dashboard showing priority clients who need review or follow-up',
        label: 'Coach attention',
        caption: 'The coach workspace prioritizes clients needing attention from observable activity instead of forcing the trainer to inspect every client manually.'
      }
    ],
    proofNote: 'These are product R&D / Alpha screens from the current Stawi prototype, not a launched production service.',
    visual: 'stawi'
  }
];

export const getPortfolioProject = (slug?: string) =>
  portfolioProjects.find((project) => project.slug === slug);