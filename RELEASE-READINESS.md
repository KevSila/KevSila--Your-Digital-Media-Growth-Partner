# Silatech pre-release security and deployment review

15 October 2026. Working checkout: D:\CodexProjects\Silatech-Growth-Partners-Windows. Branch: codex/technology-solutions-revamp. Baseline: 7666aff. All changes and tests are local; no push, merge, PR, deployment, live Netlify setting change or live analytics test event.

The final local pass uses no production Netlify operations or preview deployments. Offline CLI testing and loopback HTTP/browser checks do not create a hosted deployment. Both owned local servers were terminated after testing.

## Readiness decision

Local dependency, build, SEO, basic accessibility, browser and Netlify-offline checks pass. Release remains conditional on owner review, GA4 stream settings, privacy/measurement configuration and explicit deployment approval. A local emulation does not certify the remote CDN, live account state or production integration.

## Dependency security

The initial audit identified nine affected package entries: six high, one moderate and two low. These entries contain multiple distinct advisories and one inherited wrapper finding; they are not nine independently exploitable production endpoints. After compatible updates, full npm audit and npm audit --omit=dev both report zero known vulnerabilities. No unresolved audit finding remains as of this review.

Used npm audit fix --dry-run to inspect the proposed changes, then npm audit fix --ignore-scripts without --force. 28 existing package versions changed within their current major versions, including necessary Babel helper and browser-data updates. No new direct dependency, major upgrade, framework replacement or override was introduced. Existing dependency ranges are retained; npm ci uses the reviewed lockfile.

| Package | Initial severity | Relationship | Locked version change | Exposure here | Status |
| --- | --- | --- | --- | --- | --- |
| @babel/core | low | Transitive | 7.29.0 → 7.29.7 | Build/dev | Resolved |
| baseline-browser-mapping | moderate | Transitive | 2.10.27 → 2.11.28 | Build/dev | Resolved |
| browserslist | high | Transitive | 4.28.2 → 4.29.3 | Build/dev | Resolved |
| nanoid | high | Transitive | 3.3.12 → 3.3.20 | Build/dev | Resolved |
| postcss | high | Transitive | 8.5.14 → 8.5.30 | Build/dev | Resolved |
| react-router | high | Transitive | 7.15.0 → 7.18.4 | Production library | Resolved |
| react-router-dom | low | Direct | 7.15.0 → 7.18.4 | Production library | Resolved |
| source-map-js | high | Transitive | 1.2.1 → 1.2.2 | Build/dev | Resolved |
| vite | high | Direct | 6.4.2 → 6.4.4 | Build/dev | Resolved |

### @babel/core

Transitive dev: plugin-react → Babel. Compiler source-map file reads require crafted source input; not shipped as a static server.

- @babel/core: Arbitrary File Read via sourceMappingURL Comment (low); affected range: <=7.29.0. [Maintainer advisory](https://github.com/advisories/GHSA-4x5r-pxfx-6jf8).

### baseline-browser-mapping

Transitive dev: Babel → Browserslist. Invalid lookup input can terminate the build process; no public query API uses it.

- baseline-browser-mapping process termination on invalid input causes denial of service (moderate); affected range: >=2.0.0 <2.11.0. [Maintainer advisory](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv).

### browserslist

Transitive dev: Babel targets. Untrusted custom statistics/query input can cause crashes, prototype writes or memory exhaustion. Build-only here.

- Browserslist: Unbounded memory growth (no cache eviction) via distinct query results, leading to eventual OOM (high); affected range: <=4.28.6. [Maintainer advisory](https://github.com/advisories/GHSA-c83g-rgw3-j3cx).
- Browserslist: Uncaught crash / prototype write via untrusted browserslist-stats.json custom stats (normalizeStats) (high); affected range: <=4.28.6. [Maintainer advisory](https://github.com/advisories/GHSA-73wf-gq98-2v4g).

### nanoid

Transitive dev: Vite → PostCSS. Invalid custom/non-secure generator sizes can loop indefinitely. The application does not expose these generators.

- nanoid: non-secure generators can loop indefinitely with negative size (high); affected range: <3.3.16. [Maintainer advisory](https://github.com/advisories/GHSA-28wg-ghj8-5hjv).
- nanoid: custom generators can loop indefinitely when size is zero (high); affected range: <3.3.18. [Maintainer advisory](https://github.com/advisories/GHSA-2v37-7h3g-55p8).

### postcss

Transitive dev: Vite. Malicious CSS source-map references can disclose local map files during processing. No public CSS upload pipeline exists.

- PostCSS: incomplete fix of GHSA-6g55-p6wh-862q — attacker-controlled sourceMappingURL reads arbitrary .map files when `from` is unset (moderate); affected range: <=8.5.22. [Maintainer advisory](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp).
- PostCSS: Path Traversal in Previous Source Map Auto-Loading (sourceMappingURL) leads to Arbitrary .map File Disclosure (high); affected range: <=8.5.17. [Maintainer advisory](https://github.com/advisories/GHSA-r28c-9q8g-f849).

### react-router

Transitive production via react-router-dom. Client open-redirect and route-matching issues are relevant library hardening. Current links are fixed internal paths. Server actions, RSC and framework error deserialization are absent: this is BrowserRouter plus build-time StaticRouter, without a request-time SSR service.

- React Router: Potential CSRF via PUT/PATCH/DELETE document requests (low); affected range: >=7.12.0 <7.15.1. [Maintainer advisory](https://github.com/advisories/GHSA-84g9-w2xq-vcv6).
- React Router: Open redirect via backslash in <Link> and useNavigate (CVE-2025-68470 bypass) (moderate); affected range: >=6.0.0 <7.18.0. [Maintainer advisory](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6).
- React Router: RSCErrorHandler Missing Protocol Validation (XSS) (moderate); affected range: >=7.11.0 <7.18.0. [Maintainer advisory](https://github.com/advisories/GHSA-h8fp-f39c-q6mh).
- React Router: Arbitrary Constructor Injection via deserializeErrors() in React Router SSR Hydration (moderate); affected range: >=6.4.0 <7.18.0. [Maintainer advisory](https://github.com/advisories/GHSA-337j-9hxr-rhxg).
- React Router: Unauthenticated Denial of Service via Inefficient Route Matching (high); affected range: >=7.0.0 <7.18.0. [Maintainer advisory](https://github.com/advisories/GHSA-chx6-hx7r-mcp5).
- React Router: RSC Mode CSRF Bypass Allows Action Execution Before 400 Response (high); affected range: >=7.12.0 <7.18.2. [Maintainer advisory](https://github.com/advisories/GHSA-qwww-vcr4-c8h2).

### react-router-dom

Direct production dependency, reported through vulnerable react-router. The audit reports this wrapper at low severity while react-router itself is high; both are updated together.


- Inherited from react-router; no separate wrapper vulnerability.

### source-map-js

Transitive dev: Tailwind/PostCSS. Crafted indexed source-map offsets can exhaust the event loop. No public source-map processing service exists.

- source-map-js allows event-loop denial of service through indexed source-map section offsets (high); affected range: >=1.0.0 <1.2.2. [Maintainer advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q).

### vite

Direct dev dependency. Windows development-server filesystem bypass and UNC/editor NTLM disclosure; not an executable on the static Netlify site. Relevant to the Windows development environment, so patched rather than dismissed.

- launch-editor: NTLMv2 hash disclosure via UNC path handling on Windows (moderate); affected range: <=6.4.2. [Maintainer advisory](https://github.com/advisories/GHSA-v6wh-96g9-6wx3).
- vite: `server.fs.deny` bypass on Windows alternate paths (high); affected range: <=6.4.2. [Maintainer advisory](https://github.com/advisories/GHSA-fx2h-pf6j-xcff).

Zero audit findings describes the registry's current known-advisory data, not a general security certification. The lockfile remains reproducible; npm ci passed. npm emitted a pending lifecycle-script approval warning for esbuild, but installation exited successfully and the subsequent production build passed. No global script policy was changed.

## Hosting and static routing changes

- Added local netlify.toml: npm run build, publish dist, Node 24, Pretty URLs disabled to retain the existing extensionless non-trailing-slash canonicals. It takes effect only with a later approved deployment. No site linkage, repository integration or live settings were modified.
- All 19 public pages have real static HTML. Netlify file shadowing resolves extensionless paths to their .html files; a running Node/SSR server is unnecessary.
- Generated _redirects now maps the 19 HTML aliases (including index.html) to their existing canonical paths with HTTP 301. Query context survives those redirects.
- Trailing-slash aliases return the same static page with its extensionless canonical tag. Internal links and sitemap consistently use the canonical form; slash variants are not forced through redirect rules.
- Replaced the homepage HTTP-200 wildcard with a non-forced /* /404.html 404 fallback. Existing assets shadow it; unknown service/case-study paths and missing scripts return real HTTP 404 with initial noindex HTML.
- An initial combination of clean-URL rewrites and forced alias redirects produced self-redirects in Netlify Dev. Removed the redundant rewrites; final offline HTTP tests pass.

The installed Netlify CLI 27.4.3 was run with --offline --framework '#static' --dir dist --port 8888 --no-open --skip-gitignore. No installation, login, linking, public tunnel or deployment was requested. A temporary process preload bound Node listeners to 127.0.0.1.

Windows CLI compatibility limitation: its proxy getStatic() returns '/' + path.relative(...), producing backslashes for nested Windows files and HTTP 403 from the static server. A QA-only preload normalised separators only for relative paths rooted in this project's dist folder, matching the POSIX URL form expected in Netlify's hosting environment. Installed CLI files and production application files were not modified for this workaround. The preload is saved as silatech-loopback-only.mjs in the artifact directory below. This qualification applies to the offline results; an approved preview deployment is still needed to verify the actual CDN.

## SEO verification

Each route passes meaningful initial HTML, one H1, unique title/description, one canonical, relevant JSON-LD, working internal links and sitemap inclusion. All routes also passed Vite HTTP serving and Netlify-offline HTTP serving of their own initial canonical/content. All pages include the common ProfessionalService and WebSite nodes. Full values are in dist/seo-verification.json.

| Route | Page-specific schema | Result |
| --- | --- | --- |
| `/` | WebPage | PASS |
| `/services` | CollectionPage, BreadcrumbList | PASS |
| `/solutions` | WebPage, BreadcrumbList | PASS |
| `/approach` | WebPage, BreadcrumbList | PASS |
| `/pricing` | WebPage, BreadcrumbList | PASS |
| `/about` | AboutPage, BreadcrumbList | PASS |
| `/privacy` | WebPage, BreadcrumbList | PASS |
| `/contact` | ContactPage, BreadcrumbList | PASS |
| `/business-systems-automation` | WebPage, BreadcrumbList | PASS |
| `/portfolio` | CollectionPage, BreadcrumbList | PASS |
| `/services/technology-strategy-adoption` | Service, BreadcrumbList | PASS |
| `/services/business-platforms-integrations` | Service, BreadcrumbList | PASS |
| `/services/ai-workflow-automation` | Service, BreadcrumbList | PASS |
| `/services/data-dashboards-decision-support` | Service, BreadcrumbList | PASS |
| `/services/websites-digital-growth` | Service, BreadcrumbList | PASS |
| `/services/custom-applications-digital-products` | Service, BreadcrumbList | PASS |
| `/portfolio/asili-business-helper` | CreativeWork, BreadcrumbList | PASS |
| `/portfolio/beeepic-wisdom-mapper` | CreativeWork, BreadcrumbList | PASS |
| `/portfolio/stawi` | CreativeWork, BreadcrumbList | PASS |

Sitemap and robots are preserved. Error pages are excluded from the sitemap and carry noindex. No prices, testimonials or unsupported structured claims were added.

## Analytics semantics and privacy

- Preserved G-1JH25BX9F8 and the exact Search Console file.
- Google tag loads only at the existing canonical production origin, not localhost, branch/deploy previews or initial noindex pages. This prevents local QA from creating live events. A future domain change must update this origin restriction alongside canonicals.
- Added explicit initial and route-change page_view events using catalogue titles and canonical public paths. StrictMode replay and query/hash-only navigation do not duplicate a pageview. Navigation back to a prior page is counted normally. Unknown paths are not sent.
- Manual page context excludes URL query strings and fragments. External referrers retain only the origin; internal page referrers use the prior public route. UTM/query-based campaign detail is therefore not retained by this manual implementation; any future attribution scheme needs a reviewed allowlist.
- Both WhatsApp and phone clicks now use contact_click, with method and placement only. Removed generate_lead because opening WhatsApp is not a submitted or qualified lead. Existing key-event/conversion configuration needs account-side review.
- Enquiry fields remain browser-local until the visitor chooses to share a prepared message with WhatsApp. Drafts, message-bearing URLs, names and field contents are absent from custom analytics payloads. The custom tests use a fake gtag/DOM and never contact Google.
- Privacy-page explanation updated to describe manual pageviews and preview isolation.

RELEASE GATE: disable Enhanced Measurement for this web stream before releasing the manual tracker, or explicitly disable its automatic history pageviews and every automatic measurement that can collect unreviewed URLs/form information. Prefer disabling Enhanced Measurement entirely for this reviewed manual setup. send_page_view:false alone does not disable history-change pageviews. Unreviewed automatic outbound clicks may also collect WhatsApp link URLs. These account settings were not changed or verified, and cannot be established by local mocks. Review Google tag settings, key events and applicable consent/privacy choices with the account owner; approve live DebugView testing separately.

## Checks and release integrity

- npm ci: PASS; native Windows Node 24.18.0 / npm 11.16.0.
- npm run build: PASS; Vite 6.4.4, 19 prerendered public pages plus noindex 404.
- npm run check: PASS; TypeScript, contact contract, SEO/links/anchors/images/protected files, mocked route analytics and hosting-output contract.
- npm run check:http: PASS; all 19 clean URLs and unchanged Search Console response.
- npm run check:security: PASS; zero known vulnerabilities. Production-only audit also zero.
- npm run check:netlify: PASS with the qualified Windows QA preload; 19 page responses, 19 canonical HTML-alias redirects preserving query context, 18 trailing-slash responses, four real 404 paths, JS/image serving and Search Console bytes.
- Browser on offline Netlify: all 19 routes at 320px without horizontal overflow; one H1/canonical, skip links present, no visible unnamed controls or unlabelled form fields. Mobile open/Escape handling passed throughout.
- Desktop: service disclosure keyboard navigation/Escape, service-to-project enquiry preselection, browser back/title/canonical changes, HTML-alias enquiry navigation and unknown-page noindex passed. Browser logs had no application/hydration warnings or errors. No external message was sent.
- Browser DOM contains zero Google tag script elements across all local routes. No live analytics test events were sent.
- The five portfolio screenshots and verification file match release 362d4e09. SHA-256 for verification remains 0cf6b9d91d3be7fcc9b81580f4ee9b3a809b1da5c46e630ff57d1a5f56908797.
- Case-study data, business-systems source, six-service data/template and sitemap are unchanged from 7666aff. Stawi prototype boundaries and Asili sample-evidence wording remain intact. Original incomplete checkout, main and verified backup were not touched.

These are basic accessibility and browser checks, not a full WCAG audit, screen-reader certification, penetration test or measured field Core Web Vitals result. Generated initial JS is approximately 100.06 kB gzip; the application still lazy-loads non-home pages. No design tokens, typography or page architecture were redesigned.

## Deployment-readiness checklist

- [x] Compatible security updates locked; full and production-only audit clear.
- [x] Reproducible install, TypeScript and production build pass.
- [x] All 19 routes pass initial HTML, metadata, schema, links and sitemap checks.
- [x] Local Netlify routing/aliases/assets/404s validated with the Windows QA qualification above.
- [x] Protected images, case-study boundaries, business systems, GA4 ID and verification bytes preserved.
- [x] Basic keyboard/mobile/accessibility checks pass; local analytics suppressed.
- [ ] Owner reviews the targeted local changes and approves the release.
- [ ] Account owner disables automatic Enhanced Measurement/history pageviews and reviews key events, consent/privacy configuration and the canonical-host restriction.
- [ ] With explicit permission, validate GA4 delivery/duplicates and Search Console ownership in the real accounts.
- [ ] At the next explicitly approved deployment, verify actual CDN responses, canonical aliases and headers. No preview deployment is required for this local pass. Check existing Netlify UI build overrides/base directory against the local configuration without changing live settings.
- [ ] Push/merge/deploy only after separate approval; none performed in this pass.

## Reproduce checks and preview

```powershell
Set-Location D:\CodexProjects\Silatech-Growth-Partners-Windows
npm ci
npm run build
npm run check
npm run check:http
npm run check:security
npm run preview -- --host 127.0.0.1 --port 4173
```

Vite preview is for application/HTML review; it does not apply Netlify redirects and may still return HTTP 200 for unknown URLs. For offline Netlify checks, use an already installed CLI, the artifact preload on Windows and port 8888, then npm run check:netlify. The QA preload is not part of the production build. Both owned servers are stopped at handover.

Artifacts: C:\Users\Admin\.codex\visualizations\2026\10\14\01a13b83-231f-7730-b253-8dfe41c71e1c. Includes silatech-audit-before.json, silatech-audit-after.json, silatech-hardening-browser.json, silatech-hardening-404.png and the QA preload. Netlify-generated local cache is ignored; its incidental Deno lock is archived outside the project. No Deno application dependency was introduced.


For the same Windows offline test in a separate terminal:

```powershell
Set-Location D:\CodexProjects\Silatech-Growth-Partners-Windows
$env:NODE_OPTIONS='--import=file:///C:/Users/Admin/.codex/visualizations/2026/10/14/01a13b83-231f-7730-b253-8dfe41c71e1c/silatech-loopback-only.mjs'
netlify dev --offline --framework '#static' --dir dist --port 8888 --no-open --skip-gitignore
```

Then run `npm run check:netlify` from another terminal. Close the dedicated Netlify terminal after testing so its process-only NODE_OPTIONS setting does not affect other work.

## Primary references

- [Netlify request chain and static-file matching](https://docs.netlify.com/resources/troubleshooting/request-chain/).
- [Netlify redirect options, shadowing and custom 404s](https://docs.netlify.com/manage/routing/redirects/redirect-options/).
- [Netlify file configuration and Pretty URLs](https://docs.netlify.com/build/configure-builds/file-based-configuration/).
- [Google manual pageviews and Enhanced Measurement requirements](https://developers.google.com/analytics/devguides/collection/ga4/views).
- Maintainer advisory links are listed per package above.
