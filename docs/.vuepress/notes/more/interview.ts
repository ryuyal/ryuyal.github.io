import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'more/interview',
    link: '/interview/',
    sidebar: [
        '',
        {
            dir: 'java',
            text: 'Java面试题目',
            icon: 'mdi:language-java',
            collapsed: false,
            items: 'auto',
        },
        
    ]
})