import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import "tailwindcss/tailwind.css"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYL9uP1fQvKHyhVErWLVbj3-ThU8FrPcA",
  authDomain: "assproj-5fb50.firebaseapp.com",
  projectId: "assproj-5fb50",
  storageBucket: "assproj-5fb50.appspot.com",
  messagingSenderId: "528217920060",
  appId: "1:528217920060:web:622c699759f0fc0edda939"
};



// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authenticated:false,
    userPlayedBet:false,
    finishedDraw:true,

    users:{
      email:"",
      password:"",
      betArray:[]
    },
    UserHistory:{
      timestamp:"",
      drawNumbers:"",
      playerBet:"",
      totalWon:""
    }
  },
  mutations:{
    SET_AUTHENTICATION(state,status){
      state.authenticated = status;
    },
    SET_FINISH_DRAW(state,status){ //to block pathing till draw finishes
      state.finishedDraw = status;
    },
    SET_BET(state,status){
      state.userPlayedBet = status;
    },
    SET_USER_DATA(state,email,password){
      state.users.email = email;
      state.users.password = password;
    },
    SET_BET_ARRAY_DATA(state,arrayData){
      state.users.betArray.push(arrayData);
    },
    CLEAR_BET_ARRAY_DATA(state){
      state.users.betArray.splice(0);
    },
    SET_HISTORY_DATA(state,timestamp,drawNumbers,playerBet,totalWon){
      state.users.UserHistory.timestamp = timestamp;
      state.users.UserHistory.drawNumbers = drawNumbers;
      state.users.UserHistory.playerBet = playerBet;
      state.users.UserHistory.totalWon = totalWon;
    }
  },
  actions:{

  },
  getters:{

  }
})


new Vue({
  router,
  el: '#app',
  store: store,
  getFirestore(){
    return{
      UserHistory: db.collection('UserHistory')
    }
  },
  render: h => h(App)
}).$mount('#app')

