import './assets/index.css'
import { createI18n } from "vue-i18n"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fr from "./assets/i18n/fr.json"

const app = createApp(App)
const i18n = createI18n({
    locale: "fr",
    fallbackLocale: "fr",
    messages: { fr },
  });

app.use(router)
app.use(i18n)
app.mount('#app')
