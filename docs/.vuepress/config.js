module.exports = {
    base: '/myblog/', /* 基础虚拟路径 */
    dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
    title: '我的博客',
    description: '客官要点什么酒',
    themeConfig: {
        sidebar: [
            {
                title: 'Group 1',
                children: ['/chapter1/01_创建工具包项目']
            }

        ]
    }
}

