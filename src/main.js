import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { App } from './App.tsx'
import router from './router'
import i18n from './plugins/i18n'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n, {
  getting: {
    hello: '你好'
  }
})

app.mount('#app')
