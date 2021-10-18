<template>
<div>
    <div id="playerBetsT">Player Bets</div>
    <div id="resultBetsT">Final Results </div>
    <p id="myNumber1"></p>
        <p id="myNumber2"></p>
        <p id="myNumber3"></p>
        <p id="myNumber4"></p>
        <p id="myNumber5"></p>
     <p id="result1"></p>
        <p id="result2"></p>
        <p id="result3"></p>
        <p id="result4"></p>
        <p id="result5"></p>
        <p class="font-serif text-2xl" id="drawingText">Drawing Numbers...</p>
        <p id="finalResult"></p>
        <button class="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" v-on:click="saveToHistory" id="HistoryBut">Save Result</button>
</div>
</template>

<script>
//import { collection } from '@firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../main'

export default {
    name: 'Draw',
    props: {
    msg: String

    },
    data(){
        return{
            betsCounter:1,
            counter:1,
            resultsArray:[],
            currTimestamp:"",
            moneyWon:"",
            winStatus:"",
            betId:"",

        }
    },
  
    mounted(){ //Starting drawing progress with page change
        this.playerBets();
        this.IntervalMethod = setInterval(this.randomResults,500);
        this.betId = Math.floor(Math.random() * (10000 - 1 + 1)) + 1

   
    },
      
    methods:{

    randomNumber(){ //Generating random number and comparing with player bets

        let s = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
        for(let check of this.resultsArray){
            while(check === s){
                s = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
            }
        }
        this.resultsArray.push(s);
        let flag = this.resultsArray.indexOf(s) +1;
        for(let item of this.$store.state.users.betArray){ 
            if(item === s){
                document.getElementById("result"+flag).style.backgroundColor = "green";
                break;
            }else {
                document.getElementById("result"+flag).style.backgroundColor = "red";
            }

        }
        return s;
 

    },
    
    randomResults(){ //Showing the random numbers with a time interval

        document.getElementById("result"+this.counter).innerHTML = this.randomNumber(); 
        document.getElementById("drawingText").style.visibility = "visible";
        this.counter = this.counter +1;
        if(this.counter>5){
            clearInterval(this.IntervalMethod);
            this.checkingResults();
            document.getElementById("HistoryBut").style.visibility = "visible";
            this.currTimestamp = Date.now();

        }
        
    },

    checkingResults(){ //comparing final results and printing winnings
        let correct = 0;
        for(let item of this.$store.state.users.betArray){
            for(var i = 0;i<=this.resultsArray.length;i++){
                if(item === this.resultsArray[i]){
                    correct = correct +1;
                    document.getElementById("finalResult").innerHTML = "You got " + correct;
                    if(correct === 3){
                        document.getElementById("finalResult").innerHTML += " | And Win 5$";
                        this.moneyWon = "5$";
                        this.winStatus = "won";
                    }
                    else if(correct === 4){
                        document.getElementById("finalResult").innerHTML += " | And Win 10$";
                        this.moneyWon = "10$";
                        this.winStatus = "won";
                    }
                    else if(correct === 5){
                        document.getElementById("finalResult").innerHTML += " | And Win 20";
                        this.moneyWon = "20$";
                        this.winStatus = "won";
                    }
                     
                }
                else if(correct === 0){

                    document.getElementById("finalResult").innerHTML = "You got 0";
                    this.moneyWon = "0$";
                    this.winStatus = "lost";
                }
            }
        }
        this.$store.commit("SET_FINISH_DRAW",true);
        this.$store.commit("CLEAR_BET_ARRAY_DATA");
        this.$store.commit("SET_BET",false);
    },

    playerBets(){ //showing player bets

        for(let item of this.$store.state.users.betArray){
            document.getElementById("myNumber"+ this.betsCounter).innerHTML = item;
            console.log(this.$store.state.users.betArray.length);

            this.betsCounter = this.betsCounter+1;
        }
    },
    saveToHistory(){ //saving player bets to account
    console.log(this.betId);
    try{
        setDoc(doc(db, this.$store.state.users.email,this.betId+"" ), {
        betTimestamp : this.currTimestamp,
        drawNumbers : this.resultsArray,
        playerNumbers : this.$store.state.users.betArray,
        MoneyWon : this.moneyWon,
        BetStatus : this.winStatus
        }, {merge:true});
        alert("Saved To History Succesfully");
    }catch(e){
        console.log("error in " + e);
    }
        
    }
    
  }
  
}

  

</script>

<style scoped>
#result1{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:60%;
}
#result2{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:65%;
}
#result3{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:70%;
}
#result4{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:75%;
}
#result5{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:80%;
}
#myNumber1{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:15%;
}
#myNumber2{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:20%;
}
#myNumber3{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:25%;
}
#myNumber4{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:30%;
}
#myNumber5{
    position:fixed;
    border-style:solid;
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom:77%;
    left:35%;
}
#playerBetsT{
    position: fixed;
    left:20%;
    font-size: 30px;
    bottom: 87%;
}
#resultBetsT{
    position: fixed;
    left:65%;
    font-size: 30px;
    bottom: 87%;
}
#finalResult{
    position: fixed;
    bottom: 50%;
    left:50%;
    font-size: 30px;
}
#drawingText{
    position: fixed;
    left:70%;
    bottom:60%;
    visibility: hidden;

}
#HistoryBut{
    position: fixed;
    left:50%;
    bottom: 40%;
    font-size: 30px;
    visibility: hidden;
}
</style>