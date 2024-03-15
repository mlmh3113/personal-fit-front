import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin , defaultConfig } from '@formkit/vue'
import { useToast } from 'vue-toast-notification'
import config from '../formkit.config.js'
import '../node_modules/flowbite-vue/dist/index.css'






import App from './App.vue'
import router from './router'

import "vue-toast-notification/dist/theme-sugar.css";

const $toast = useToast(
    {
        position: 'top-right',
        duration: 5000
    }
)



const app = createApp(App)
app.provide('toast', $toast)
app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
