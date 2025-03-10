import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'cs_basic/ds_algo',
    link: '/ds_algo/',
    sidebar: [
        '',
        {
            dir: 'preview',
            text: '概述',
            icon: 'mdi-cube-outline',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'datastructure',
            text: '数据结构',
            icon: 'mdi-file-tree',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'algorithms',
            text: '算法',
            // icon: 'carbon:chart-relationship',
            icon:'mdi-function-variant',
            collapsed: false,
            items: 'auto',
        }
    ]
})