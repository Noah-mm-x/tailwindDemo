import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')

const darkByStorage = localStorage.theme === 'dark'
const darkBySystem = (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
if (darkByStorage) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}