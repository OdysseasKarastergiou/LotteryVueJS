<template>
<login-modal @loginEvent="login"></login-modal>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import LoginModal from '../components/Home.vue';


export default {
  name: 'Login',
  components:{
    LoginModal
  },

  methods:{
    login(emailInput,passwordInput){  //user log in
    console.log(emailInput + passwordInput);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in 
        const name   = emailInput.substring(0, emailInput.lastIndexOf("@"));
        const password = passwordInput;
        const user = userCredential.user;
        this.$store.commit("SET_AUTHENTICATION",true);
        this.$store.dispatch("authData",name,password);
        this.$store.commit("USER_LOGGED_IN",true);
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

</style>
