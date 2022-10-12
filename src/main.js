import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { createI18n } from './i18n'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

const i18n = createI18n()

Vue.use(Element)

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

