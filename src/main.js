import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import App from './App.vue'
import router from './router'
import QrReader from 'vue3-qr-reader';
const app = createApp(App)

import './assets/all.scss'

app.use(createPinia())
app.use(router)
app.use(QrReader);
app.mount('#app')
