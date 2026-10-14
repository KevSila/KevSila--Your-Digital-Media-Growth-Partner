import { useEffect } from 'react';
import { SITE_URL } from '../constants';
import { structuredData } from '../data/siteMetadata';
type PageMetaProps = {title: string; description: string; path?: string; robots?: string; ogType?: 'website' | 'article'; image?: string; imageAlt?: string};
function upsertMeta(selector: string, attributes: Record<string,string>) {
  let element=document.head.querySelector<HTMLMetaElement>(selector);
  if(!element) { element=document.createElement('meta'); document.head.appendChild(element); }
  Object.entries(attributes).forEach(([key,value])=>element!.setAttribute(key,value));
}
export default function PageMeta({title,description,path='/',robots='index, follow, max-image-preview:large',ogType='website',image='/og-image.png',imageAlt='Silatech Growth Partners — Technology Solutions & Digital Transformation'}: PageMetaProps) {
  useEffect(()=>{
    const url=`${SITE_URL}${path}`;
    const imageUrl=image.startsWith('http') ? image : `${SITE_URL}${image}`;
    document.title=title;
    upsertMeta('meta[name="description"]',{name:'description',content:description});
    upsertMeta('meta[name="robots"]',{name:'robots',content:robots});
    for(const [key,value] of Object.entries({'og:type':ogType,'og:title':title,'og:description':description,'og:url':url,'og:image':imageUrl,'og:image:alt':imageAlt})) upsertMeta(`meta[property="${key}"]`,{property:key,content:value});
    for(const [key,value] of Object.entries({'twitter:card':'summary_large_image','twitter:title':title,'twitter:description':description,'twitter:image':imageUrl})) upsertMeta(`meta[name="${key}"]`,{name:key,content:value});
    let canonical=document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if(!canonical) { canonical=document.createElement('link'); canonical.rel='canonical'; document.head.appendChild(canonical); }
    canonical.href=url;
  },[title,description,path,robots,ogType,image,imageAlt]);
  const schema=structuredData(path);
  return schema ? <script id="page-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} /> : null;
}