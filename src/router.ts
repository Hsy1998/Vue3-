import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'

const md = (fileName) =>
  h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName })
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        {
          path: 'intro',
          component: md('intro'),
        },
        {
          path: 'install',
          component: md('install'),
        },
        {
          path: 'get-started',
          component: md('getStarted'),
        },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    },
  ],
})
