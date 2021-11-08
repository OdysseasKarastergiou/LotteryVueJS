import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Lottery from '../views/Lottery.vue'
import Draw from '../views/Draw.vue'
import History from '../views/History.vue'
import MainPage from '../views/LotteryVueJS.vue'
import { store } from '../main.js'

Vue.use(VueRouter)


export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter:(to,from,next) =>{
      if(store.state.userLoggedIn == true){
        next(false);
      }else{
        next();
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter:(to,from,next) =>{
      if(store.state.userLoggedIn == true){
        next(false);
      }else{
        next();
      }
    }
  },
  {
    path: '/LotteryVueJS',
    name: 'MainPage',
    component: MainPage
  },

  {
    path: '/Lottery', // nav guarding if user hasnt logged in
    name: 'Lottery',
    component: Lottery,
    beforeEnter:(to,from,next) =>{
      if(store.state.authenticated == false || store.state.finishedDraw == false){
        next(false);
      }else{
        next();
      }
    }
  },
  
  {
    path: '/Draw',  //nav guarding if user hasnt placed a bet
    name: 'Draw',
    component: Draw,
    beforeEnter:(to,from,next) =>{
      if(store.state.userPlayedBet == false){
        next(false);
      }else{
        next();
      }
    }
    
  },
  {
    path: '/History',  // nav guarding if user hasnt logged in
    name: 'History',
    component: History,
    beforeEnter:(to,from,next) =>{
      if(store.state.authenticated == false || store.state.finishedDraw == false){
        next(false);
      }else{
        next();
      }
    }
  }


]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router

