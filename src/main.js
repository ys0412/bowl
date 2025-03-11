import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 确保 router.js 存在并正确配置

const app = createApp(App);

app.use(router);
app.mount('#app');