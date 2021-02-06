// 横向栏的配置

module.exports = [
    {
        text: '面试宝典',
        items: [
            { text: 'JS', link: '/notes/interview/JS/' },
            { text: 'JS数据结构', link: '/notes/interview/algorithm/' },
            { text: '手写代码', link: '/notes/interview/hander/string/01_相关算法与API.md' },
            { text: '网络', link: '/notes/interview/network/index.md' },
            { text: 'Vue', link: '/notes/interview/Vue/VueRouter/index.md' },
        ]
    },
    {
        text: '工具',
        items: [
            {
                text: 'Vuepress',
                items: [
                    { text: '基本使用', link: '/notes/utils/Vuepress/01_导航栏分类.md' }
                ]
            },
            {
                text: 'Git', link: '/notes/utils/Git/'
            },
        ]
    }
]
