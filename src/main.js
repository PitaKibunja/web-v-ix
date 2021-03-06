import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from "vuetify";
import ckeditor from "@ckeditor/ckeditor5-vue2"
import BaseLayout from './components/BaseComponents/BaseLayout'
import Axios from 'axios'
Vue.prototype.$http = Axios;
Vue.config.productionTip = false
Vue.use(ckeditor)
new Vue({
  router,
  store,
  vuetify,
  Vuetify,
  BaseLayout,
  render: h => h(App)
}).$mount('#app')
