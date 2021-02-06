import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Other from '../views/other.vue'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
          },
          {
            path: '/other',
            name: 'Other',
            component: Other
          }
    ]
  })
}