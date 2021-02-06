module.exports = {
    "/notes/interview/algorithm/": [
        '',
        '02_链表'
    ],
    "/notes/interview/hander/": [
        {
            title: '字符串',
            path: '/notes/interview/hander/string/01_相关算法与API.md'
        },
        {
            title: '对象',   // 必要的
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                { title: '相关API', path: '/notes/interview/hander/object/01_相关API.md' },
                { title: '深拷贝与浅拷贝', path: '/notes/interview/hander/object/02_深拷贝浅拷贝.md' },

            ]
        },
        {
            title: '数组',   // 必要的
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/notes/interview/hander/array/01_数组API',
                '/notes/interview/hander/array/02_数组操作',
                '/notes/interview/hander/array/03_不常用API',
            ]
        },
        {
            title: '后台',   // 必要的
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/notes/interview/hander/back-data/ajax.md',
                '/notes/interview/hander/back-data/promise.md',
            ]
        },
        {
            title: '交互',   // 必要的
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/notes/interview/hander/communication/event_bus.md',
                '/notes/interview/hander/communication/pub-sub.md',
            ]
        },
        { title: 'DOM', path: '/notes/interview/hander/dom/READMD.md' }
    ],
    "/notes/": 'auto',
}
