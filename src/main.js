import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import home from '@/components/home'
import news from '@/components/news'
import game from '@/components/game'
import contact from '@/components/contact'
import review from '@/components/review'

Vue.use(VueRouter);
const router = new VueRouter({
  mode:"history",
  routes:[
   {path:"/",component:home},
   {path:"/news",component:news},
   {path:"/game",component:game},
   {path:"/contact",component:contact},
   {path:"/reviews",component:review}
    ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
