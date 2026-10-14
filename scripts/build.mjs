import { build, createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
await build();
const server=await createServer({server:{middlewareMode:true,hmr:false},appType:'custom',ssr:{noExternal:['react-router-dom','react-router'],resolve:{conditions:['module-sync','module','node','development']}},optimizeDeps:{noDiscovery:true,include:[]}});
const escape=value=>value.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
try {
  const { render, pageMetadata, publicPaths }=await server.ssrLoadModule('/entry-server.tsx');
  const template=await readFile('dist/index.html','utf8');
  for(const path of [...publicPaths,'/404']) {
    const meta=pageMetadata[path] || {title:'Page Not Found | Silatech Growth Partners',description:'This page could not be found. Explore Silatech services or return to the homepage.',ogType:'website'};
    const url=`https://kevsilaservices.netlify.app${path==='/' ? '/' : path}`;
    let html=template.replace(/<title>.*?<\/title>/s,`<title>${escape(meta.title)}</title>`);
    const values={description:meta.description,'og:title':meta.title,'og:description':meta.description,'og:url':url,'og:type':meta.ogType || 'website','twitter:title':meta.title,'twitter:description':meta.description,robots:path==='/404' ? 'noindex, follow' : 'index, follow, max-image-preview:large'};
    for(const [name,value] of Object.entries(values)) {
      const attribute=name.startsWith('og:') ? 'property' : 'name';
      html=html.replace(new RegExp(`<meta ${attribute}="${name}" content="[^"]*"\\s*/?>`),`<meta ${attribute}="${name}" content="${escape(value)}" />`);
    }
    html=html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/,`<link rel="canonical" href="${escape(url)}" />`);
    html=html.replace(/<div id="root">[\s\S]*?<\/div>/,()=>`<div id="root" data-rendered-path="${path}">${render(path)}</div>`);
    const output=path==='/' ? resolve('dist/index.html') : resolve('dist',`${path.slice(1)}.html`);
    await mkdir(dirname(output),{recursive:true});
    await writeFile(output,html);
  }
  const urls=publicPaths.map(path=>`  <url><loc>https://kevsilaservices.netlify.app${path==='/' ? '/' : path}</loc></url>`).join('\n');
  await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  console.log(`Prerendered ${publicPaths.length} public pages and a noindex 404 page.`);
} finally { await server.close(); }