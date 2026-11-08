import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { plumeTheme } from 'vuepress-theme-plume';

export default defineUserConfig({
  base: '/novels/',
  lang: 'zh-CN',
  title: '原创小说',
  description: '原创小说文库',

  pagePatterns: [
    '**/*.md',
    '!.vuepress',
    '!node_modules',
    '!**/drafts/**',
    '!**/logs/**',
    '!**/meta/**',
    '!**/reviews/**',
    '!**/summaries/**',
  ],

  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1 << 16,
      },
    },
  }),

  theme: plumeTheme({
    hostname: 'https://ajtn123.github.io',
    autoFrontmatter: false,
    lastUpdated: false,
    contributors: false,
  }),
});
