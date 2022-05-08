import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router'

// 插入饿了么UI插件
Vue.use(ElementUI);

// 插入路由插件
Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
