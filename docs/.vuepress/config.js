const Nav = require('./nav.js')
const SideBar = require('./sidebar.js')

module.exports = {
    base: '/myblog/', /* 基础虚拟路径 */
    dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
    title: '有何不可',
    description: '崇尚极简主义、MarkDown与思维导图的重度使用者',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }],
        ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
    themeConfig: {
        nav: Nav,
        subSidebar: 'auto',
        sidebar: SideBar,
        // 最近更新
        lastUpdated: 'Last Updated',
        // 标题链接的深度
        sidebarDepth: 2,
        // 开启滚动
        smoothScroll: true,
        // 在github上编辑
        repo: 'https://github.com/whynot-todo/myblog/',
        repoLabel: '查看源码',
        docsBranch: 'main/docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}

