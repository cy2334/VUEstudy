import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 导入路由配置
import { createPinia } from 'pinia'

App.use(createPinia())
createApp(App)
  .use(router)  // 启用路由
  .mount('#app')
