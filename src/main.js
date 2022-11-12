import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vue3Debounce } from 'vue-debounce'


createApp(App).directive('debounce', vue3Debounce({ lock: true })).mount('#app')
