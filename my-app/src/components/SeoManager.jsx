import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://allianz-group.tech';
const DEFAULT_IMAGE = 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/da6188193_logoAG.png';

const SEO_BY_PATH = {
  '/': {
    title: 'Alliance Group | Crankshaft Restoration for Marine and Locomotive Engines',
    description:
      'Alliance Group restores heavy-duty crankshafts for marine diesel and locomotive engines using patented electric arc metallization technology with up to 4 years of warranty.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'IndustrialBusiness',
      name: 'Alliance Group',
      url: `${BASE_URL}/`,
      logo: DEFAULT_IMAGE,
      image: DEFAULT_IMAGE,
      email: 'VKP.ALLIANZ@GMAIL.COM',
      telephone: '+380936689068',
      areaServed: ['Ukraine', 'Europe'],
      description:
        'Restoration of heavy-duty crankshafts for marine diesel and locomotive engines using patented electric arc metallization technology.',
      sameAs: [`${BASE_URL}/`],
    },
  },
  '/gallery': {
    title: 'Alliance Group Gallery | Crankshaft Restoration Projects and Production Photos',
    description:
      'Browse Alliance Group gallery with crankshaft restoration projects, production facility photos, electric arc metallization process, grinding, polishing, and final results.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Alliance Group Gallery',
      url: `${BASE_URL}/gallery`,
      description:
        'Gallery of crankshaft restoration projects, workshop photos, and production process images from Alliance Group.',
    },
  },
};

const ensureTag = (selector, createTag) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }
  return element;
};

const setMetaByName = (name, content) => {
  const meta = ensureTag(`meta[name="${name}"]`, () => {
    const tag = document.createElement('meta');
    tag.setAttribute('name', name);
    return tag;
  });
  meta.setAttribute('content', content);
};

const setMetaByProperty = (property, content) => {
  const meta = ensureTag(`meta[property="${property}"]`, () => {
    const tag = document.createElement('meta');
    tag.setAttribute('property', property);
    return tag;
  });
  meta.setAttribute('content', content);
};

export default function SeoManager() {
  const location = useLocation();
  const seo = SEO_BY_PATH[location.pathname] || SEO_BY_PATH['/'];
  const canonicalUrl = `${BASE_URL}${location.pathname === '/' ? '/' : location.pathname}`;

  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = 'en';

    setMetaByName('description', seo.description);
    setMetaByName('robots', 'index, follow');
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:site_name', 'Alliance Group');
    setMetaByProperty('og:title', seo.title);
    setMetaByProperty('og:description', seo.description);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:image', DEFAULT_IMAGE);
    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', seo.title);
    setMetaByName('twitter:description', seo.description);
    setMetaByName('twitter:image', DEFAULT_IMAGE);

    const canonical = ensureTag('link[rel="canonical"]', () => {
      const tag = document.createElement('link');
      tag.setAttribute('rel', 'canonical');
      return tag;
    });
    canonical.setAttribute('href', canonicalUrl);

    const existingSchema = document.head.querySelector('script[data-seo-schema="true"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.setAttribute('data-seo-schema', 'true');
    schemaScript.textContent = JSON.stringify(seo.schema);
    document.head.appendChild(schemaScript);
  }, [canonicalUrl, seo]);

  return null;
}
