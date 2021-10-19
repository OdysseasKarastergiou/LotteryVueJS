<template>
    <div id="app">
        <div id="pickId">Welcome, {{this.$store.state.users.email}}. Pick the numbers!</div>
        <select class="bg-purple-300" v-model="input.firstNumber" id="drop1">
            <option id="drop1-content" v-for="n in 30" :key="n" :value="n">{{ n }}</option>
        </select>
        <select class="bg-purple-300" v-model="input.secondNumber" id="drop2">
            <option id="drop2-content" v-for="n in 30" :key="n" :value="n">{{ n }}</option>
        </select>
        <select class="bg-purple-300" v-model="input.thirdNumber" id="drop3">
            <option id="drop3-content" v-for="n in 30" :key="n" :value="n">{{ n }}</option>
        </select>
        <select class="bg-purple-300" v-model="input.fourthNumber" id="drop4">;
            <option id="drop4-content" v-for="n in 30" :key="n" :value="n">{{ n }}</option>
        </select>
        <select class="bg-purple-300" v-model="input.fifthNumber" id="drop5">
            <option id="drop5-content" v-for="n in 30" :key="n" :value="n">{{ n }}</option>
        </select>
        <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" v-on:click="submitNumbers" id="sumbitButId">Submit</button>
        <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" v-on:click="logOut" id="logOutBut">Log Out</button>
        
        <h1 id="resultMessage" ></h1>
                 
         

</div>
</template>

<script>


export default {
  name: 'Lottery',
  props: {

    msg: String,
    checkProp:{
        hasDuplicates : Boolean
    }
  },

  
  
  data(){
    return{

        numberPicks: [],

        input:{
            firstNumber:"",
            secondNumber:"",
            thirdNumber:"",
            fourthNumber:"",
            fifthNumber:""
        }
    }
},
methods: {
    submitNumbers(){  // placing bet and checking for errors
        var counter = 0;
        let correctBet = false;
        const finalPicks = [];


        this.numberPicks.push(this.input.firstNumber,this.input.secondNumber,this.input.thirdNumber,this.input.fourthNumber,this.input.fifthNumber);
        for(const item of this.numberPicks){
            if(item){
                counter = counter+1;
                
            }
            for(var i=0;i<this.numberPicks.length;i++){
                for(var j = i+1;j<this.numberPicks.length;j++){
                    if(this.numberPicks[i] === this.numberPicks[j]){
                        this.hasDuplicates = true;
                    }
                }

            }
            if(counter == 5 && !this.hasDuplicates){
                for(const item2 of this.numberPicks){
                    finalPicks.push(item2);
                    correctBet = true;
                    ////
                }
            }else{
                document.getElementById("resultMessage").innerHTML = "Need to fill all 5 / Duplicate Pick";
                correctBet = false;

        }
        }
        if(correctBet){
            this.$store.commit("SET_BET",true);
            this.$store.commit("SET_FINISH_DRAW",false);
            for(var y=0;y<this.numberPicks.length;y++){
                this.$store.commit("SET_BET_ARRAY_DATA",finalPicks[y]);
            }

 
            this.$router.push({name: 'Draw'});
        }
        this.hasDuplicates = false;
        this.numberPicks.splice(0);
        counter = 0;
        
    },
    logOut(){
        try{
            this.$store.commit("SET_AUTHENTICATION",false);
            this.$store.commit("SET_BET",false);
            this.$store.commit("USER_LOGGED_IN",false);
            alert("Log out successful");

            this.$router.push({path:"/"});  
             
        }catch(e){
            alert("Error logging out " + e);
        }


    }
    
},
}


</script>


<style scoped>
#pickId{
    position: fixed;
    font-size: 30px;
    left:10%;


}

#drop1{
    position: fixed;
    width: 50px;
    height: 50px;
    font-size: 25px;
    left:10%;
    bottom: 80%;

}
#drop1-content{
    font-size:25px;
}
#drop2{
    position: fixed;
    width: 50px;
    height: 50px;
    font-size: 25px;
    left:15%;
    bottom: 80%;

}
#drop2-content{
    font-size:25px;
}
#drop3{
    position: fixed;
    width: 50px;
    height: 50px;
    font-size: 25px;
    left:20%;
    bottom: 80%;

}
#drop3-content{
    font-size:25px;
}
#drop4{
    position: fixed;
    width: 50px;
    height: 50px;
    font-size: 25px;
    left:25%;
    bottom: 80%;

}
#drop4-content{
    font-size:25px;
}
#drop5{
    position: fixed;
    width: 50px;
    height: 50px;
    font-size: 25px;
    left:30%;
    bottom: 80%;

}
#drop5-content{
    font-size:25px;
}
#sumbitButId{
    position: fixed;
    font-size: 25px;
    left:10%;
    bottom:70%;
}
#resultMessage{
    position: fixed;
    bottom:50%;
    left:20%
}
#logOutBut{
    position:fixed;
    bottom:94%;
    left:70%;
}

</style>