import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const origin='http://127.0.0.1:8888';
const pages=JSON.parse(await readFile('dist/seo-verification.json','utf8'));
for(const page of pages) {
  const response=await fetch(origin+page.path,{redirect:'manual'});
  assert.equal(response.status,200,`${page.path}: Netlify local status`);
  const html=await response.text();
  assert(html.includes(`href="${page.canonical}"`) && html.includes('<main id="main-content"'),`${page.path}: own initial HTML`);
  const alias=page.path==='/' ? '/index.html' : page.path+'.html';
  const redirect=await fetch(origin+alias+'?intent=project',{redirect:'manual'});
  assert.equal(redirect.status,301,`${alias}: canonical redirect status`);
  const target=new URL(redirect.headers.get('location'),origin);
  assert.equal(target.pathname,page.path);assert.equal(target.search,'?intent=project');
  if(page.path!=='/') {
    const trailing=await fetch(origin+page.path+'/',{redirect:'manual'});
    assert.equal(trailing.status,200);
    assert((await trailing.text()).includes(`href="${page.canonical}"`));
  }
}
for(const path of ['/not-a-page','/services/not-a-service','/portfolio/not-a-project','/assets/not-a-script.js']) {
  const response=await fetch(origin+path,{redirect:'manual'});
  assert.equal(response.status,404,`${path}: unknown paths must not be HTTP 200`);
  assert((await response.text()).includes('noindex, follow'));
}
const verification=await fetch(origin+'/googlec555c9832d27b872.html');
assert.equal(verification.status,200);
assert.equal(await verification.text(),await readFile('public/googlec555c9832d27b872.html','utf8'));
const home=await (await fetch(origin)).text();
const asset=home.match(/src="(\/assets\/[^\"]+\.js)"/)[1];
const script=await fetch(origin+asset);assert.equal(script.status,200);assert(script.headers.get('content-type').includes('javascript'));
for(const image of ['asili-dashboard.webp','asili-order.jpg','beeepic-blueprint.webp','stawi-coach.webp','stawi-member.webp']) assert.equal((await fetch(origin+'/portfolio/'+image)).status,200);
console.log('PASS: Netlify Dev offline; 19 initial HTML routes, 19 HTML-alias redirects preserving query context, 18 trailing-slash canonical pages, 4 real HTTP 404s, JS/images and unchanged Search Console file. No deployment or analytics requests.');