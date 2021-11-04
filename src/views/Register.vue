<template>
<RegisterModal @registerEvent="register"></RegisterModal>    
</template>


<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import RegisterModal from "../components/Register.vue";

export default {
  name: 'Register',

  props: {
    msg: String
  },

  components:{
    RegisterModal
  },

    methods:{

    register(emailInput,passwordInput){ //registering user
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
    // Signed in 
    const name   = emailInput.substring(0, emailInput.lastIndexOf("@"));
    const password = passwordInput;
    const user = userCredential.user;
    try{
      this.$store.commit("SET_AUTHENTICATION",true);
      this.$store.commit("SET_USER_DATA",name,password);
      this.$store.commit("USER_LOGGED_IN",true);
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

</style>