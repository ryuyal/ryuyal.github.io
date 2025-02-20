import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'cs_basic/network',
    link: '/network/',
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
            dir: 'physical_layer',
            text: '物理层',
            icon: 'mdi-transmission-tower',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'data_link_layer',
            text: '数据链路层',
            icon: 'mdi-switch',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'network_layer',
            text: '网络层',
            icon: 'mdi-web',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'transport_layer',
            text: '传输层',
            icon: 'mdi-transfer',
            collapsed: false,
            items: 'auto',
        },
        {
            dir: 'application_layer',
            text: '应用层',
            icon: 'mdi-apps',
            collapsed: false,
            items: 'auto',
        }
    ]
})