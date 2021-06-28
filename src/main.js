import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Home from "@/components/Home";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
      {path: '/', component: Home},
      {path: '/home', component: Home},
    ],
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

