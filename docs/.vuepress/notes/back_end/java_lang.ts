import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'back_end/java_lang',
    link: '/java_lang/',
    sidebar: [
        '',
        {
            dir: 'basic',
            text: '基础语法',
            icon: 'mdi-format-list-checks',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'improve',
            text: '进阶使用',
            icon: 'mdi-layers',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'apply',
            text: '高级应用',
            // icon: 'carbon:chart-relationship',
            icon:'mdi-rocket-launch',
            collapsed: false,
            items: 'auto',
        }
    ]
})