import { useEffect } from 'react';
import { SITE_URL } from '../constants';

type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
  robots?: string;
  ogType?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
};

const PageMeta = ({
  title,
  description,
  path = '/',
  robots = 'index, follow, max-image-preview:large',
  ogType = 'website',
  image = '/og-image.png',
  imageAlt = 'Silatech Growth Partners — smarter systems for growing businesses'
}: PageMetaProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, robots, ogType, image, imageAlt]);

  return null;
};

export default PageMeta;
