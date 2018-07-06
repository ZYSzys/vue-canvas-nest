import Vue from 'vue'
import Router from 'vue-router'

import Blue from './rgb/Blue.vue'
import Green from './rgb/Green.vue'
import Red from './rgb/Red.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blue',
      name: 'Blue',
      component: Blue
    },
    {
      path: '/green',
      name: 'Green',
      component: Green
    },
    {
      path: '/red',
      name: 'Red',
      component: Red
    }
  ]
})