import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import EN from './locale/en.json'
import PT from './locale/pt.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())

const i18n = createI18n({
  locale: 'pt',
  messages: {
    en: EN,
    pt: PT,
  },
})

app.use(i18n)

app.use(router)

app.mount('#app')
