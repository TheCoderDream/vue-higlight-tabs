import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// routes
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import About from "@/pages/About";

const router = new VueRouter(
    {
      path: '/',
      component: Home
    },
    {
      path: '/features',
      component: Features
    },
    {
      path: '/about',
      component: About
    }
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
