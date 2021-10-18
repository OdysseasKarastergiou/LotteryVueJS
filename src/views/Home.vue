<template>
    <div id="model-login" class="model font-serif text-2xl">
  <div class="model-content ">
    <form @submit.prevent="login" id="login-form">
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <input v-model="input.logEmailInput" type="email" id="login-email" placeholder="email@example.com" required />
        <label class="bg-green-500 text-white font-italic py-1 px-2 rounded-full" for="login-email">Email Address</label>
      </div>
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
       <input v-model="input.logPasswordInput" type="password" id="login-password" placeholder="password" required />
       <label class="bg-green-500 text-white font-italic py-1 px-2 rounded-full" for="login-password">Input Password</label>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="logInButtonId">Log In</button>
      <h2 id="logIn-error"></h2>
    </form>
  </div> 
</div>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default {
  name: 'Login',
  props: {
    msg: String
  },
  computed:{
    getUser(){
      return this.$store.getters.getUser;     ////////
    }
  },

  data(){
    return{
      input:{
        logEmailInput:"",
        logPasswordInput:""
        }


      }
    },


  methods:{
    login(){  //user log in
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.input.logEmailInput, this.input.logPasswordInput)
      .then((userCredential) => {
        // Signed in 
        const name   = this.input.logEmailInput.substring(0, this.input.logEmailInput.lastIndexOf("@"));
        const password = this.input.logPasswordInput;
        const user = userCredential.user;
        this.$store.commit("SET_AUTHENTICATION",true);
        this.$store.commit("SET_USER_DATA",name,password);
        this.$router.push({path:"Lottery", params:{name}}).catch(()=>{});
          
         
        
     
        
        // ...
        })
        .catch((error) => {
          console.log(error.message);
          document.getElementById("logIn-error").innerHTML = "wrong email/password";
          });
          },
            }


}
</script>

<style scoped>
#model-signup{
  position:absolute;
  top:50%;
  left:50%;
  margin-top: -200px;
  margin-left: -100px;
}
#login-password{
  margin-left:8px;
}
#logInButtonId{
  margin-left: 28px;
}
</style>
