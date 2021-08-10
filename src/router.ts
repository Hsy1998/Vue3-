import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from 'vue-router'
import Instro from './markdown/intro.md'
import Install from './markdown/install.md'
import GetStarted from './markdown/getStarted.md'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'

const md = (string) => h(Markdown, { content: string, key: String })
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
          component: md(Instro),
        },
        {
          path: 'install',
          component: md(Install),
        },
        {
          path: 'get-started',
          component: md(GetStarted),
        },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    },
  ],
})
