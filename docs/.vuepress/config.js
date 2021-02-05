const Nav = require('./nav.js')

module.exports = {
    base: '/myblog/', /* 基础虚拟路径 */
    dest: './dist', /* 打包文件基础路径, 在命令所在目录下 */
    title: '我的博客',
    description: '客官要点什么酒',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: Nav,
        sidebar: 'auto',
        // 最近更新
        lastUpdated: 'Last Updated',
        // 标题链接的深度
        sidebarDepth: 2,
        // 开启滚动
        smoothScroll: true,
        // 在github上编辑
        repo: 'https://github.com/whynot-todo/myblog/',
        repoLabel: '查看源码',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}

