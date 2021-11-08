<template>
    <div id="app">
        <div class="p-5 m-1" id="pickId">
            Welcome, {{usernameMap}}. Pick the numbers!
        </div>
        <div>
            <SelectLottery @submitEvent="submitNumbers"></SelectLottery>
        </div>
        <log-out @logOutEvent="logOut"></log-out>
        <h1 id="resultMessage" ></h1>
                 
         

</div>
</template>

<script>
import SelectLottery from "../components/Lottery.vue"
import LogOut from "../components/LogOut.vue"
import { mapGetters } from 'vuex'

export default {
  name: 'Lottery',

  components:{
      SelectLottery,
      LogOut
  },

  computed:{
      ...mapGetters({
          usernameMap: 'usernameMap'
      })
  },

  props: {
    checkProp:{
        hasDuplicates:{
            type:Boolean
        }
    }
  },
  
  methods: {
    submitNumbers(str){  // placing bet and checking for errors
        var counter = 0;
        let correctBet = false;
        const finalPicks = [];
        for(const item of str){
            if(item){
                counter = counter+1;
                
            }
            for(var i=0;i<str.length;i++){
                for(var j = i+1;j<str.length;j++){
                    if(str[i] === str[j]){
                        this.hasDuplicates = true;
                    }
                }

            }
            if(counter == 5 && !this.hasDuplicates){
                for(const item2 of str){
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
            for(var y=0;y<str.length;y++){
                this.$store.commit("SET_BET_ARRAY_DATA",finalPicks[y]);
            }

 
            this.$router.push({name: 'Draw'});
        }
        this.hasDuplicates = false;
        str.splice(0);
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
    position: inherit;
    font-size: 40px;
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