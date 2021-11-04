<template>
<div id="model-register" class="model font-serif text-2xl">
  <div class="model-content">
    <form  @submit.prevent="registerSubmit"  id="register-form">
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 
      rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <input v-model="input.emailInput" type="email" id="register-email" placeholder="email@example.com" required />
        <label class="text-black font-italic py-1 px-2 text-4xl" for="register-email">Email Address</label>
      </div>
      <div class="input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 
      rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
       <input v-model="input.passwordInput" type="password" id="register-password" placeholder="password" required />
       <label class=" text-black font-italic py-1 px-2 text-4xl" for="register-password">Choose Password</label>
      </div>
      <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 
      hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" id="buttonId">Register</button>
      <h2 id="reg-error"></h2>
    </form>
  </div>
</div> 
</template>

<script>

export default{
    name:'RegisterModal',
    data(){
        return{
            input:{
               emailInput:"",
               passwordInput:"" 
            }
            
        }
    },
    methods:{
        registerSubmit(){
            this.$emit("registerEvent",this.input.emailInput,this.input.passwordInput);
        }
    }
}
</script>

<style scoped>
#model-register{
  position:absolute;
  top:50%;
  left:35%;
  margin-top: -200px;
  margin-left: -100px;
}
#register-password{
  margin-left:30px;
  font-size:40px;
}
#register-email{
  margin-left:-10px;
  font-size:40px;
}
#buttonId{
  margin-left:15px;
  font-size:40px;
}

</style>