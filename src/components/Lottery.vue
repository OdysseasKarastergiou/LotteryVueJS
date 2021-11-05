<template>
<div>
    <select 
    class="bg-purple-300 m-5" 
    id="drop1" 
    v-model="selections[index]" 
    v-for="(item,index) in items" 
    :key="item">
        <option 
        id="drop1-content" 
        v-for="n in 30" 
        :key="n" 
        :value="n">
        {{ n }}</option>
    </select>
    <button 
    class="transition duration-500 ease-in-out transform hover:-translate-y-1
     hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
     @click="submitNumbersE" 
     id="sumbitButId">Submit</button>
</div>
 
    
</template>

<script>


export default{
    name:'SelectLottery',
    data(){
        return{
            items:5,
            selections:[""]
        }
    },
    methods:{
        submitNumbersE(){
            this.$emit('submitEvent',this.selections);
        }
    }

}
</script>

<style scoped>

#drop1-content{
    font-size:30px;
}
#drop1{
    display: inline-flex;
    width: 60px;
    height: 60px;
    font-size: 25px;

}

</style>