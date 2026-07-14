// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://launch-site-ai.github.io',
  base: '/aerantis-holdings',
  output: 'static',

  redirects: {
    '/reviews': { status: 301, destination: '/aerantis-holdings/' },
    '/blog': { status: 301, destination: '/aerantis-holdings/' },
    '/blog/how-to-hire-contractor': { status: 301, destination: '/aerantis-holdings/' },
    '/blog/signs-you-need-plumber': { status: 301, destination: '/aerantis-holdings/' },
    '/blog/spring-landscaping-tips': { status: 301, destination: '/aerantis-holdings/' },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/success'),
    }),
    robotsTxt(),
  ],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-display',
      weights: ['500', '600', '700'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400', '500', '700'],
      styles: ['normal'],
    },
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
