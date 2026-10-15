import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
import ts from 'typescript';
const SITE_URL='https://kevsilaservices.netlify.app';
const pages=JSON.parse(fs.readFileSync('dist/seo-verification.json','utf8'));
const events=[];
const context={exports:{},URL,document:{referrer:'https://example.org/private-path?email=private#secret'},window:{location:{origin:SITE_URL},gtag:(...args)=>events.push(args)},require:name=>name.includes('constants') ? {SITE_URL} : {pageMetadata:Object.fromEntries(pages.map(page=>[page.path,page]))}};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('lib/analytics.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,context);
const track=context.exports.trackPageView;
track('/');track('/'); // StrictMode replay must not duplicate the initial pageview.
track('/services/');track('/services');track('/contact');track('/');
const views=events.filter(event=>event[0]==='event');
assert.equal(views.length,4);
assert.equal(views[0][1],'page_view');
assert.equal(views[0][2].page_referrer,'https://example.org/');
assert.equal(views[1][2].page_location,SITE_URL+'/services');
assert.equal(views[1][2].page_referrer,SITE_URL+'/');
assert.equal(views[1][2].page_title,pages.find(page=>page.path==='/services').title);
assert(!JSON.stringify(events).includes('private'),'No referrer path, query or fragment may enter manual analytics');
track('/unknown/private-person');track('/services?email=private');
assert.equal(events.filter(event=>event[0]==='event').length,4,'Unknown paths must not be sent');
context.window.location.origin='http://127.0.0.1:4173';track('/about');
context.window.location.origin='https://preview--site.netlify.app';track('/pricing');
assert.equal(events.filter(event=>event[0]==='event').length,4,'Previews must not send events');
context.window.location.origin=SITE_URL;context.window.gtag=undefined;track('/about');
const template=fs.readFileSync('index.html','utf8');
assert(template.indexOf('<script>')>template.indexOf('<link rel="canonical"'),'Bootstrap must run after its canonical element has been parsed');
assert(template.indexOf('<script>')>template.indexOf('<meta name="robots"'),'Bootstrap must run after its noindex metadata has been parsed');
const inline=template.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
function bootstrap(origin,noindex=false) {
  const scripts=[];
  const fakeDocument={referrer:'https://example.org/private?secret=yes',querySelector:selector=>selector.includes('robots') ? {content:noindex ? 'noindex, follow' : 'index, follow'} : {href:SITE_URL+'/services'},createElement:()=>({}),head:{appendChild:script=>scripts.push(script)}};
  const fakeWindow={location:{origin,pathname:'/services',search:'?private=yes'}};
  vm.runInNewContext(inline,{window:fakeWindow,document:fakeDocument,Date,URL});
  return {scripts,commands:Array.from(fakeWindow.dataLayer || [],args=>Array.from(args))};
}
for(const origin of ['http://localhost:5173','http://127.0.0.1:4173','https://preview--site.netlify.app']) {
  const result=bootstrap(origin);assert.equal(result.scripts.length,0);assert.equal(result.commands.length,0);
}
assert.equal(bootstrap(SITE_URL,true).scripts.length,0,'Static noindex error pages must not initialise GA');
const live=bootstrap(SITE_URL); // Mock DOM only: no external requests or live events.
assert.equal(live.scripts.length,1);
assert.equal(live.commands[1][2].send_page_view,false);
assert.equal(live.commands[1][2].page_location,SITE_URL+'/services');
assert.equal(live.commands[1][2].page_referrer,'https://example.org/');
console.log('PASS: mock-only initial/route/back pageviews, StrictMode deduplication, safe page context, missing analytics, noindex/preview opt-out; no live analytics requests.');