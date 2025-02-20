import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
import dsAndAlgo from './notes/cs_basic/ds_algo'
import network from './notes/cs_basic/network.ts'
import operatingSystem from './notes/cs_basic/operating_system.ts'
import frontEndBasic from './notes/front_end/basic.ts'
import interview from './notes/more/interview.ts'
// const demoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: 
  [
    dsAndAlgo, 
    network,
    operatingSystem,
    frontEndBasic,
    interview,
  ],
})
