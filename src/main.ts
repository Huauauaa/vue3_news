import { createApp } from 'vue'
import TinyVue from '@opentiny/vue'

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(TinyVue)
app.mount('#app')
