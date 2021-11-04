<template>
<div id="model-login" class="model font-serif text-2xl">
    <div class="model-content">
    <form @submit.prevent="loginSubmit" id="login-form">
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <input v-model="input.emailInput" type="email" id="login-email" placeholder="email@example.com" required />
        <label class="text-black font-italic text-4xl py-1 px-2 " for="login-email">Email Address</label>
      </div>
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
       <input v-model="input.passwordInput" type="password" id="login-password" placeholder="password" required />
       <label class=" text-black font-italic py-1 px-2 text-4xl" for="login-password">Input Password</label>
      </div>
      <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="logInButtonId">Log In</button>
      <h2 id="logIn-error"></h2>
    </form>
    </div> 
</div>
</template>

<script>

export default{
    name:'LoginModal',

    data(){
        return{
            input:{
               emailInput:"",
               passwordInput:"" 
            }
            
        }
    },    
    methods:{
        loginSubmit(){
            this.$emit("loginEvent",this.input.emailInput,this.input.passwordInput);
        }
    }
}
</script>

<style scoped>
#model-login{
  position:absolute;
  top:50%;
  left:36%;
  margin-top: -200px;
  margin-left: -100px;
}
#login-password{
  margin-left:8px;
  font-size:40px;
}
#login-email{
  margin-left:0px;
  font-size:40px;
}
#logInButtonId{
  margin-left: 28px;
  font-size:45px;
}

</style>