import { defineThemeConfig, defineCollections, defineNavbarConfig } from 'vuepress-theme-plume';

export default defineThemeConfig({
  navbar: defineNavbarConfig([
    { text: '首页', link: '/' },
    { text: '洄门拾遗', link: '/sf-1/book.html' },
    { text: '异植秘典', link: '/ss-1/book.html' },
  ]),

  collections: defineCollections([
    {
      type: 'doc',
      dir: 'sf-1',
      title: '洄门拾遗',
      sidebar: 'auto',
    },
    {
      type: 'doc',
      dir: 'ss-1',
      title: '异植秘典',
      sidebar: 'auto',
    },
  ]),

  footer: {
    copyright: 'CC0 1.0 Universal',
  },
});
