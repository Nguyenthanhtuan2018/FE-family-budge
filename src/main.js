import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// ✅ Quan trọng: import router đúng path & export default
import router from './router/index.js'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
