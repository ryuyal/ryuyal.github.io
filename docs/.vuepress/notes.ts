import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
import dsAndAlgo from './notes/cs_basic/ds_algo'
// const demoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [dsAndAlgo],
})
