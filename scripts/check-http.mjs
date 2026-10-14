import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { preview } from 'vite';
const pages=JSON.parse(await readFile('dist/seo-verification.json','utf8'));
const server=await preview({preview:{host:'127.0.0.1',port:0,strictPort:true,open:false}});
const address=server.httpServer.address();
const origin=`http://127.0.0.1:${address.port}`;
try {
  for(const page of pages) {
    const response=await fetch(origin+page.path,{redirect:'error'});
    assert.equal(response.status,200,`${page.path}: HTTP status`);
    const html=await response.text();
    assert(html.includes(`href="${page.canonical}"`),`${page.path}: wrong initial canonical`);
    assert(html.includes('<main id="main-content"'),`${page.path}: initial main content missing`);
    assert(html.includes('id="page-schema"'),`${page.path}: initial structured data missing`);
  }
  const verification=await fetch(origin+'/googlec555c9832d27b872.html');
  assert.equal(verification.status,200);
  assert.equal(await verification.text(),await readFile('public/googlec555c9832d27b872.html','utf8'));
  console.log(`PASS: ${pages.length} clean URLs serve their own prerendered HTML over HTTP; Search Console verification is served unchanged.`);
} finally { await new Promise((resolve,reject)=>server.httpServer.close(error=>error ? reject(error) : resolve())); }