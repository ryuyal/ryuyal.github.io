import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' , icon: "material-symbols:home"},
  { text: '博客', link: '/blog/', icon: "material-symbols:menu-book-rounded" },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '计算机基础',
    icon: "mdi:desktop-classic",
    items: [
      { text: '数据结构与算法', link: '/notes/cs_basic/ds_algo/README.md', icon: "mdi:graph-outline" },
      { text: '计算机网络', link: '/notes/cs_basic/network/README.md', icon: "mdi:lan-connect"},
      { text: '操作系统', link: '/notes/cs_basic/operating_system/README.md', icon: "mdi:cog-transfer" },
      { text: '计算机组成原理', link: '/notes/cs_basic/composition/README.md', icon: "mdi:chip" },
    ]
  },
  {
    text: '前端开发',
    icon: "ph:code-bold",
    items: [
      { text: '前端基础', link: '/notes/front_end/basic/README.md', icon: "mdi:language-html5" },
      { text: 'Vue', link: '/notes/front_end/vue/README.md', icon: "vscode-icons:file-type-vue" },
      { text: 'React', link: '/notes/front_end/react/README.md', icon: "vscode-icons:file-type-reactjs" },
    ]
  },
  {
    text: '后端开发',
    icon: "mdi:server",
    items: [
      { text: 'Java基础', link: '/notes/back_end/java_lang/README.md', icon: "vscode-icons:file-type-java" },
      { text: 'Go基础', link: '/notes/back_end/go_lang/README.md', icon: "vscode-icons:file-type-go" },
      { text: 'Spring全家桶', link: '/notes/back_end/spring/README.md', icon: "simple-icons:spring" },
      { text: 'MySQL', link: '/notes/back_end/mysql_note/README.md', icon: "mdi:database" },
      { text: 'Redis', link: '/notes/back_end/redis_note/README.md', icon: "simple-icons:redis" },
      { text: '中间件', link: '/notes/back_end/middleware_note/README.md', icon: "mdi:pipe" },
      { text: '设计模式', link: '/notes/back_end/design_pattern/README.md', icon: "mdi:puzzle-outline" },
    ]
  },
  {
    text: '更多',
    icon: "mdi:more-circle-outline",
    items: [
      { text: '面试题目', link: '/notes/more/interview/README.md', icon: "clarity:talk-bubbles-line" },
      { text: 'AIGC', link: '/notes/more/aigc_note/README.md', icon: "mdi:robot-outline" },
      { text: '工具', link: '/notes/more/tools_note/README.md', icon: "mdi:toolbox" },
      { text: '站点导航', link: '/notes/more/website_nav/README.md', icon: "mdi:compass" },
    ]
  },
  
  // {
  //   text: '笔记',
  //   items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
])
