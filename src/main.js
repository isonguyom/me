import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const app = createApp(App)

gsap.registerPlugin(ScrollTrigger)

app.use(createPinia())

app.mount('#app')
