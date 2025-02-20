import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'cs_basic/operating_system',
    link: '/operating_system/',
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
            dir: 'process',
            text: '进程管理',
            icon: 'mdi-crosshairs-gps',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'memory',
            text: '内存管理',
            icon: 'mdi-memory',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'file',
            text: '文件管理',
            icon: 'mdi-folder',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'disk',
            text: '磁盘管理',
            icon: 'mdi-harddisk',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'device',
            text: '设备管理',
            icon: 'mdi-devices',
            collapsed: false,
            items: 'auto',
        }
    ]
})