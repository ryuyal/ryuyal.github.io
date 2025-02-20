import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'front_end/basic',
    link: '/front_end_basic/',
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
            dir: 'html',
            text: 'HTML',
            icon: 'mdi-language-html5',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'CSS',
            text: 'CSS',
            // icon: 'carbon:chart-relationship',
            icon:'mdi-language-css3',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'JavaScript',
            text: 'JavaScript',
            // icon: 'carbon:chart-relationship',
            icon:'mdi-language-javascript',
            collapsed: false,
            items: 'auto',
        }
    ]
})