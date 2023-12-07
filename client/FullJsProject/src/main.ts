import './assets/index.css'
import { createI18n } from "vue-i18n"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fr from "./assets/i18n/fr.json"
import axios from 'axios'

const app = createApp(App)
const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages: { fr },
});

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

app.use(router)
app.use(i18n)
app.mount('#app')
