import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'

// 引入 Pinia 和持久化插件（如果用了）
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建应用实例
const app = createApp(App)

// 创建 Pinia 实例并使用插件（可选）
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 注入 Pinia 和 Router
app.use(pinia)
app.use(router)

app.mount('#app')
