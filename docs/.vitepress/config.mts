import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ?  '/ns-node/' : '/',
  title: "NsNode",
  description: "A VitePress Site1",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/component/quickstart' }
    ],

    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '安装', link: '/component/installation' },
          { text: '快速上手', link: '/component/quickstart' }
        ]
      },
      {
        text: '基础组件',
        items: [
          { text: 'Button按钮', link: '/component/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'http://192.168.18.10/ns-h5/ns-node.git' }
    ],
    footer: {
      message: '楠社科技·数据中心',
      copyright: '当前维护人：王永建'
    }
  }
})
