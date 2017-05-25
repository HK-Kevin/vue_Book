import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Manger from '../components/Manger.vue'
import Detail from '../components/Detail.vue'
import Update from '../components/Update.vue'
import Delete from '../components/Delete.vue'
import Cart from '../components/Cart.vue'

Vue.use(Router);

const routes = [
  {path:'/home',
   component:Home
  },
  {
    path:'/list',
    component:List
  },
  {
    path:'/manger',
    component:Manger,
    children:[
     {
       path:'add',
       component:Add
     },
      {
        path:'update',
        component:Update
      },
      {
        path:'delete',
        component:Delete
      }

   ]
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail
  },
  {
    path:'/cart',
    component:Cart
  }
]

export default new Router({
  routes
})
