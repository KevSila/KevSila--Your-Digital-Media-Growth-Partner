import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { netlifyRedirects } from './routing.mjs';
const pages=JSON.parse(await readFile('dist/seo-verification.json','utf8'));
const paths=pages.map(page=>page.path);
const redirects=await readFile('dist/_redirects','utf8');
assert.equal(redirects,netlifyRedirects(paths));
assert.equal(await readFile('public/_redirects','utf8'),redirects,'Tracked routing must match generated routing');
const config=await readFile('netlify.toml','utf8');
assert(config.includes('command = "npm run build"') && config.includes('publish = "dist"'));
assert(config.includes('NODE_VERSION = "24"') && config.includes('pretty_urls = false'));
const rules=redirects.split('\n').filter(line=>line && !line.startsWith('#')).map(line=>line.trim().split(/\s+/));
assert.equal(new Set(rules.map(rule=>rule[0])).size,rules.length);
for(const path of paths) {
  await stat(path==='/' ? 'dist/index.html' : 'dist'+path+'.html');
  const alias=path==='/' ? '/index.html' : path+'.html';
  assert(rules.some(([from,to,status])=>from===alias && to===path && status==='301!'));
}
assert.deepEqual(rules.at(-1),['/*','/404.html','404']);
assert(!rules.some(([,,status])=>status==='200'),'Complete prerendering must not fall back to homepage rewrites');
const error=await readFile('dist/404.html','utf8');assert(error.includes('noindex, follow') && error.includes('Page Not Found'));
console.log(`PASS: Netlify build/publish/Node settings, ${paths.length} static routes, .html canonical redirects, no redundant rewrites and non-forced 404 fallback.`);