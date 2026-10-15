import assert from 'node:assert/strict';
import { readFile, stat, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
const origin='https://kevsilaservices.netlify.app';
const sitemap=await readFile('dist/sitemap.xml','utf8');
const paths=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>new URL(match[1]).pathname);
assert.equal(paths.length,19,'Expected every existing and new public route');
assert.equal(new Set(paths).size,paths.length,'Duplicate sitemap route');
const retained=['/','/services','/privacy','/contact','/business-systems-automation','/portfolio','/services/technology-strategy-adoption','/services/business-platforms-integrations','/services/ai-workflow-automation','/services/data-dashboards-decision-support','/services/websites-digital-growth','/services/custom-applications-digital-products','/portfolio/asili-business-helper','/portfolio/beeepic-wisdom-mapper','/portfolio/stawi'];
for(const route of retained) assert(paths.includes(route),`Existing route lost: ${route}`);
for(const route of ['/solutions','/approach','/pricing','/about']) assert(paths.includes(route),`New route missing: ${route}`);
const titles=new Set(),descriptions=new Set(),pages=new Map(),report=[];
const decode=value=>value.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
for(const path of paths) {
  const html=await readFile(path==='/' ? resolve('dist/index.html') : resolve('dist',`${path.slice(1)}.html`),'utf8');
  pages.set(path,html);
  const title=[...html.matchAll(/<title>(.*?)<\/title>/gs)];
  const description=[...html.matchAll(/<meta name="description" content="([^"]*)"/g)];
  const canonical=[...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)];
  assert.equal(title.length,1,`${path}: title count`);
  assert.equal(description.length,1,`${path}: description count`);
  assert.equal(canonical.length,1,`${path}: canonical count`);
  assert.equal(canonical[0][1],origin+path,`${path}: canonical`);
  assert(!titles.has(title[0][1]),`${path}: duplicate title`);titles.add(title[0][1]);
  assert(!descriptions.has(description[0][1]),`${path}: duplicate description`);descriptions.add(description[0][1]);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length,1,`${path}: one visible heading`);
  const schema=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  assert.equal(schema.length,1,`${path}: schema count`);
  const data=JSON.parse(schema[0][1]);assert.equal(data['@context'],'https://schema.org');
  const types=data['@graph'].map(item=>item['@type']);
  assert(types.includes('ProfessionalService'),`${path}: provider schema`);
  if(path.startsWith('/services/')) assert(types.includes('Service'),`${path}: service schema`);
  if(path.startsWith('/portfolio/')) assert(types.includes('CreativeWork'),`${path}: case study schema`);
  if(path==='/portfolio' || path==='/services') assert(types.includes('CollectionPage'));
  if(path!=='/') assert(types.includes('BreadcrumbList'));
  if(path==='/about') assert(types.includes('AboutPage'));
  if(['/solutions','/approach','/pricing'].includes(path)) assert(types.includes('WebPage'));
  const main=html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] || '';
  const text=main.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  assert(text.length>500,`${path}: meaningful initial HTML`);
  if(path.startsWith('/services/')) assert(text.split(/\s+/).length>=350,`${path}: service page too thin`);
  for(const tag of html.match(/<img\b[^>]*>/g) || []) {
    assert(/\balt="[^"]+"/.test(tag),`${path}: image alt`);
    assert(/\bwidth="\d+"/.test(tag) && /\bheight="\d+"/.test(tag),`${path}: image dimensions`);
  }
  for(const key of ['og:title','og:description','og:url','twitter:title','twitter:description','robots']) assert.equal([...html.matchAll(new RegExp(`<meta (?:property|name)="${key}"`,'g'))].length,1,`${path}: duplicate ${key}`);
  assert(html.includes('G-1JH25BX9F8'),`${path}: analytics ID`);
  report.push({path,title:decode(title[0][1]),description:decode(description[0][1]),canonical:canonical[0][1],schema:types,words:text.split(/\s+/).length});
}
for(const [path,html] of pages) {
  for(const match of html.matchAll(/href="([^"<>]+)"/g)) {
    const href=decode(match[1]);
    if(!(href.startsWith('/') && !href.startsWith('//')) && !href.startsWith('#')) continue;
    const url=new URL(href,origin+path);
    if(/\.[a-z0-9]+$/i.test(url.pathname)) {await stat(resolve('dist',url.pathname.slice(1)));continue;}
    const target=pages.get(url.pathname);assert(target,`${path}: broken route ${href}`);
    if(url.hash) assert(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`${path}: broken anchor ${href}`);
  }
  for(const match of html.matchAll(/<img[^>]+src="(\/[^\"]+)"/g)) await stat(resolve('dist',match[1].slice(1)));
}
for(const anchor of ['solutions','industries','case-study','process','about','engagement']) assert(pages.get('/').includes(`id="${anchor}"`),`Legacy anchor ${anchor}`);
assert(pages.get('/').includes('Starting from scratch') && pages.get('/').includes('Improving existing technology'));
assert(!pages.get('/').includes('Verified record'),'Sample Asili proof must not claim verification');
assert(pages.get('/portfolio/stawi').includes('prototype'),'Stawi must disclose prototype status');
assert(!pages.get('/portfolio/stawi').includes('rounded-full border border-white/10 bg-white/[.06] px-3 py-1 text-[10px] font-bold text-slate-200">Alpha'),'No prominent technical Alpha badge');
const base='362d4e09d9377c41f6d0c847845104c38b25fb69';
execFileSync('git',['diff','--exit-code',base,'--','public/portfolio','public/googlec555c9832d27b872.html']);
assert.equal(await readFile('dist/googlec555c9832d27b872.html','utf8'),await readFile('public/googlec555c9832d27b872.html','utf8'));
assert((await readFile('dist/404.html','utf8')).includes('noindex, follow'));
assert.equal((await readFile('public/robots.txt','utf8')).trim(),(await readFile('dist/robots.txt','utf8')).trim());
assert.equal(await readFile('public/sitemap.xml','utf8'),sitemap,'Source sitemap differs from production');
await writeFile('dist/seo-verification.json',JSON.stringify(report,null,2)+'\n');
console.log(`PASS: ${paths.length} routes; unique production metadata; visible content; schema; internal links and legacy anchors; image dimensions; protected assets; sitemap and robots.`);