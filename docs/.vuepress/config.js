import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { plumeTheme } from 'vuepress-theme-plume';
import novels from './novels.js';

export default defineUserConfig({
  base: '/novels/',
  lang: 'zh-CN',
  title: '小说文库',
  description: '一些原创小说',

  pagePatterns: [
    'README.md',
    'main/*/*/*/book.md',
    'main/*/*/*/chapters/*.md',
  ],

  bundler: viteBundler(),

  theme: plumeTheme({
    hostname: 'https://ajtn123.github.io',
    autoFrontmatter: false,
    lastUpdated: false,
    contributors: false,
    search: false,

    collections: novels.map(novel => ({
      type: 'doc',
      dir: novel.dir,
      title: novel.title,
      sidebar: novel.sidebar,
    })),

    footer: {
      copyright: 'CC0 1.0 Universal',
    },
  }),

  extendsPage(page) {
    if (page.path === '/') {
      page.frontmatter.config.push({
        type: 'features',
        features: novels.map(novel => ({
          title: novel.title,
          link: novel.overview,
        }))
      });
    }
  },
});
