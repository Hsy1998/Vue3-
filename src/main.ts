import { createApp } from 'vue'
import App from './App.vue'
import Hsy from './components/Hsy.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history:history,
  routes: [
    {path: '/',component: Hsy}
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')

