import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'back_end/spring',
    link: '/spring/',
    sidebar: [
        '',
        {
            dir: 'spring_boot_web',
            text: 'JavaWeb开发基础',
            icon: 'simple-icons:spring',
            collapsed: false,
            items: 'auto',
        }
    ]
})