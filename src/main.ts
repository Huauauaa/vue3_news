import { createApp } from 'vue'
import TinyVue from '@opentiny/vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(TinyVue)
app.use(ElementPlus)
app.mount('#app')
