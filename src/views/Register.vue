

<template>
<div id="model-register" class="model font-serif text-2xl">
  <div class="model-content">
    <form  @submit.prevent="register"  id="register-form">
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <input v-model="input.emailInput" type="email" id="register-email" placeholder="email@example.com" required />
        <label class="bg-green-500 text-white font-italic py-1 px-2 rounded-full" for="register-email">Email Address</label>
      </div>
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
       <input v-model="input.passwordInput" type="password" id="register-password" placeholder="password" required />
       <label class="bg-green-500 text-white font-italic py-1 px-2 rounded-full" for="register-password">Choose Password</label>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" id="buttonId">Register</button>
      <h2 id="reg-error"></h2>
    </form>
  </div>
</div>         
</template>


<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'Register',
  props: {
    msg: String
  },
  data(){
    return{
      input:{
        emailInput:"",
        passwordInput:""
        }

      }
    },

    computed:{

    },

    methods:{

    register(){ //registering user
      
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.input.emailInput, this.input.passwordInput)
      .then((userCredential) => {
    // Signed in 
    const name   = this.input.emailInput.substring(0, this.input.emailInput.lastIndexOf("@"));
    const password = this.input.passwordInput;
    const user = userCredential.user;
    try{
      this.$store.commit("SET_AUTHENTICATION",true);
      this.$store.commit("SET_USER_DATA",name,password);
      alert("Register Successful");
    }catch(e){
      alert("Error registering");
    }
    this.$router.push({path:'Lottery'});
    // ...
    })
    .catch((error) => {
    document.getElementById("reg-error").innerHTML = "E-mail in use/weak password";
    // ..
  });
    }
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
#register-password{
  margin-left:27px;
}
#buttonId{
  margin-left:15px;
}
</style>