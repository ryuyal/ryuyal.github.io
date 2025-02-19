import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'cs_basic/ds_algo',
    link: '/ds_algo/',
    sidebar: [
        '',
        {
            dir: 'preview',
            text: '概述',
            icon: 'mdi:database-outline',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'datastructure',
            text: '数据结构',
            icon: 'carbon:chart-relationship',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'algorithms',
            text: '算法',
            icon: 'carbon:chart-relationship',
            collapsed: false,
            items: 'auto',
        }
    ]
})