import { defineConfig } from 'vitepress'
import baseConfig from 'vitepress-theme-open17/config'
import { genFeed } from 'vitepress-theme-open17/genFeed'
// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "My Awesome Project",
//   description: "A VitePress Site"
// })

export default defineConfig({
  title: "M-Blog",
  description: "A VitePress Site",
  extends: baseConfig,
  themeConfig: {
    // 主页
    blog: {
      title: "M-1",
      desc: "A Good Site",
      direct: "lft", // 或者"rgt" 侧边栏在左边or在右边
      avatar: "https://www.nodeseek.com/avatar/17057.png",//你的头像(图片url)
      pageSize: 5,                  //每页显示文章数量,默认为5
      maxTags: 5,                  //博客首页的标签栏显示的最大标签数量,默认为5
      tagPageLink: '/page/tags',    // 如果不为空,则在博客首页的标签栏会显示更多标签的链接,点击后会跳转到该链接(请填写标签页的链接)
      ornateStyle: true,             //是否开启博客装饰样式,默认为false,
      bgImg: "xxxx",                  //仅可用于doc文章(包括博客文章)的默认背景图片,可选,当博客装饰样式开启才生效
      bgImgDark: "xxxx",            //仅可用于doc文章(包括博客文章)的默认背景图片(暗黑模式),可选,当博客装饰样式开启才生效
      widgets: [
        // {
        //   name: "Custom", // 自定义链接名称
        //   link: '/guide/0-intro',  //可以为空,非空会显示对应的链接
        //   html: `主题自定义组件,支持html渲染`, //内容html,支持tailwindcss
        // },
        // {
        //   name: "Custom2", // 自定义链接名称
        //   html: `主题自定义组件,支持html渲染`, //内容html,支持tailwindcss
        // },
      ]
    },
    // 搜索
    search: {
      provider: "local",
    },
    // Rss
    feed: {
      baseUrl: "https://blog.cli3.de", // 你的部署的域名,必须
      copyright: "Copyright © 2023-present open17", //版权声明,可选
      image: "https://www.open17.vip/logo.png", // RSS图片,可选
      favicon: "https://www.open17.vip/logo.ico" //RSS图标,可选
    },
    // 页面底部
    footer: {
      message:
        'Released under the <a href="https://github.com/open17/vitepress-theme-open17/blob/template/LICENSE">Apache 2.0 License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/open17">open171</a>',
    },
    // 评论
    comment: {
      use: true,
      repo: "skii22/blog-comments",
      repo_id: "R_kgDOL0rHQw",
      category: "Announcements",
      category_id: "DIC_kwDOL0rHQ84CsOgh",
      mapping: "pathname",
      strict: "0",
      reactions_enabled: "1",
      emit_metadata: "0",
      input_position: "bottom",
      data_theme: "preferred_color_scheme",
      data_lang: "zh-CN",
      crossorigin: "anonymous"
    },
  },
  buildEnd: genFeed,
})

