# Silatech Growth Partners

**Technology Solutions & Digital Transformation**

We help businesses choose and implement the right technology, connect and improve their existing tools, streamline operations, adopt AI responsibly, and make better decisions.

Silatech serves solo founders, small businesses, professional firms, established companies, nonprofits and other organisations. The site welcomes both first digital setups and improvements to existing platforms.

## Local development on Windows

Active development checkout: `D:\CodexProjects\Silatech-Growth-Partners-Windows`.

Use Windows-native Git and Node.js. The implementation was built with Node.js 24.18.0 and npm 11.16.0. React Router requires Node.js 20 or later. Node.js 24 LTS is a suitable development environment.

```powershell
Set-Location D:\CodexProjects\Silatech-Growth-Partners-Windows
npm ci
npm run dev -- --host 127.0.0.1
```

For the production experience, including prerendered HTML:

```powershell
npm run build
npm run check
npm run check:http
npm run preview -- --host 127.0.0.1 --port 4173
```

Open `http://127.0.0.1:4173/`. Vite development mode serves the interactive application; the production build adds route-specific HTML for crawlers and previews.

The Windows-compatible archive filename was introduced in a local commit on `codex/technology-solutions-revamp`. It is a content-identical rename of one historical JSON file. The original filename and complete commit history remain available in parent commits. Sparse checkout and a persistent NTFS-protection override are not needed for the current development branch. Old commits that contain the incompatible filename still cannot be fully checked out by ordinary Git for Windows.

The original incomplete checkout and its verified backup are separate and should be preserved.

## Architecture

The website retains React 19, TypeScript, Vite, Tailwind CSS 4, React Router, Motion and Lucide. No runtime or build dependencies were added. The release-hardening pass updates existing compatible versions in the committed lockfile; see RELEASE-READINESS.md.

- `data/services.ts`: six service definitions, deliverables, scope boundaries and relationships.
- `data/serviceDetails.ts`: business headlines, problems, platform options, audiences and evidence boundaries.
- `data/portfolioProjects.ts`: portfolio evidence, roadmap, image descriptions and intrinsic dimensions.
- `data/siteMetadata.ts`: public routes, unique metadata and structured data.
- `components/`: shared brand styling, page sections, navigation and related-service links.
- `pages/`: service, portfolio, business systems and contact views.
- `entry-server.tsx`: static rendering of the same page components.
- `scripts/build.mjs`: Vite build followed by prerendering using the existing React/Vite packages.
- `scripts/validate.mjs`: production HTML, metadata, schema, links, legacy anchors and protected-file checks.
- `scripts/check-contact.mjs`: contact intent payload and enquiry privacy checks.
- `scripts/check-http.mjs`: clean-URL production HTML and verification-file HTTP checks.

The build generates 19 public routes: homepage, service overview, six service pages, solutions, approach, pricing, about, business systems, portfolio index, three case studies, enquiry and privacy. Non-home routes are emitted as `.html` files so Vite preview can serve clean URLs directly; a separate noindex `404.html` is also generated. The production sitemap is derived from the same metadata catalogue, and checks ensure it matches the tracked source sitemap.

Client hydration retains prerendered content while lazy page chunks load. Query-driven service selection is applied after hydration to keep initial markup consistent. Unknown paths render a noindex page. The local Netlify configuration uses static file matching and a real HTTP-404 fallback; Vite preview does not emulate these rules.

## Services and philosophy

1. Technology Strategy & Adoption
2. Business Platforms & Integrations
3. AI, Agents & Workflow Automation
4. Data, Dashboards & Decision Support
5. Websites & Digital Growth Infrastructure
6. Custom Applications & Digital Products

“Systemic clarity follows the subtraction of the unnecessary.”

Start with the real business problem. Recommend existing tools where they fit, build custom solutions when justified, and include adoption, documentation, security, privacy, appropriate human oversight and ownership in the scope of delivery.

Platform names describe possible client tools, not certifications or formal partnerships. Project claims must distinguish implemented functionality, demonstrations, prototypes and roadmap work.

## Protected work and enquiries

All five repaired portfolio images and `public/googlec555c9832d27b872.html` remain unchanged from release `362d4e09`. The three case studies remain available at their original URLs. Stawi has no prominent technical Alpha badge, and its prototype limitations are explained in the text. Asili sample traceability is not independently verified production evidence.

GA4 property `G-1JH25BX9F8` is preserved. Custom WhatsApp and phone contact_click events contain method and placement, not enquiry drafts or message-bearing URLs. Manual pageviews use canonical paths and catalogue titles. Local previews do not load GA4. Enhanced Measurement must be disabled/reviewed in the account before release to prevent duplicate history pageviews and unreviewed automatic collection. Browser enquiry fields prepare a WhatsApp message without a Silatech submission database; the visitor reviews and sends it in WhatsApp. Live Analytics reporting, enhanced-measurement settings and Search Console ownership require account-side verification.

## Release safeguards

Do not push, merge or deploy without explicit approval. The connected public site remains `https://kevsilaservices.netlify.app/`; no live domain, repository, deployment integration or Netlify setting was changed. Local netlify.toml and generated redirect rules define the proposed release behaviour and only take effect on a later approved deployment. The canonical host remains the existing production host.

Review `RELEASE-READINESS.md` for the current security breakdown, deployment checklist, test results and remaining account-side gates. `REFINEMENT-REVIEW.md` and `REVIEW.md` retain the earlier milestones. The hardened lockfile currently reports zero known npm vulnerabilities; rerun `npm run check:security` before a later release.
