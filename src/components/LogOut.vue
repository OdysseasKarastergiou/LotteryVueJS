<template>
<button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 
        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
        @click="logOutE" 
        id="logOutBut">Log Out</button>
    
</template>

<script>


export default {
    name:'LogOut',
    methods:{
        logOutE(){
            this.$emit("logOutEvent");
        }
    }
}

</script>

<style scoped>

</style>