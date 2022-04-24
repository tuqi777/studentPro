import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/index.css'
import request from '@/api/request'
// require('./mock');

// i18n国际化
import i18n from "@/lang";


import echarts from '@/plugins/echarts.js'
Vue.prototype.$echarts = echarts
Vue.prototype.$api = request
console.log('====================================');
console.log(process.env.NODE_ENV);
console.log('====================================');
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
