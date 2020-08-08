import Vue from "vue";

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'  
import 'default-passive-events' //浏览器兼容
import ElementUI from 'element-ui';
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import '@/icons'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './permission' // permission control
import './utils/error-log' // error log
require('../mock')
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
