import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as maptilerClient from '@maptiler/client';
maptilerClient.config.apiKey = "OxnQ6JFnSlE7UX6HrV0a";

const app = createApp(App)

app.use(router)

app.mount('#app')
