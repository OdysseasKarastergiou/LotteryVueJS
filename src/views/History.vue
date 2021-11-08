<template>
<div class="">
<table class="table-striped table-auto bg-purple-300 shadow-inner text-4xl opacity-75">
  <thead id="table">
    <th class="border-collapse border border-green-800 text-red-800">Draw Numbers</th>
    <th class="border-collapse border border-green-800 text-red-800">Status</th>
    <th class="border-collapse border border-green-800 text-red-800">Amount Won</th>
    <th class="border-collapse border border-green-800 text-red-800">Delete Entry</th>
  </thead>
  <tbody>
    <tr v-for="(row,i) in sortedArray" 
    :key="i">
      <td class="border-collapse border border-green-800 font-extrabold text-yellow-600">
        {{row.drawNumbersArray}}</td>
      <td :class="{lostBet:row.playedBetStatus===`lost`,wonBet:row.playedBetStatus===`won`}" 
      class="border-collapse border border-green-800 font-bold">
      {{row.playedBetStatus}}</td>
      <td :class="{lostBet:row.playerWinnings===`0$`,wonBet:row.playerWinnings!==`0$`}" 
      class="border-collapse border border-green-800 font-bold">
      {{row.playerWinnings}}</td>
      <td><button class="text-yellow-900 font-semibold" 
      @click='deleteTableRow(i,row)'>
      Delete</button></td>
    </tr>
    <log-out @logOutEvent="logOut"></log-out>
  </tbody>
</table>


</div>

  
</template>

<script>
import { db } from '../main.js'
import { collection, getDocs } from "firebase/firestore"
import { doc, deleteDoc } from "firebase/firestore"
import LogOut from "../components/LogOut.vue"
import { mapGetters } from 'vuex'

export default {
    name: 'History',

    components:{
      LogOut
    },

    data(){
      return{
        userHistoryData:[{
          drawNumbersArray:"",
          timestamp:"",
          playerNumbersArray:"",
          playerWinnings:"",
          playedBetStatus:"",
          playerDocID:""}],
      }

    },

    computed: {
      sortedArray: function() { //Sorting UserHistory by Date
        function compare(a, b) {
          if (a.timestamp < b.timestamp)
          return -1;
          if (a.timestamp > b.timestamp)
          return 1;
          return 0;
          }
          return this.userHistoryData.sort(compare);
          },
          
      ...mapGetters({
        usernameMap: 'usernameMap'
      })
          
    },

    mounted(){
      this.showPlayerData();
    },
    
    methods:{
      async showPlayerData(){  //getting player history from database 
        const querySnapshot = await getDocs(collection(db,this.usernameMap));
          querySnapshot.forEach((doc) => {
          this.userHistoryData.push({timestamp:doc.data().betTimestamp,drawNumbersArray:doc.data().drawNumbers,
          playerNumbersArray:doc.data().playerNumbers,playerWinnings:doc.data().MoneyWon,playedBetStatus:doc.data().BetStatus,
          playerDocID:doc.id});
          
        });
        if(this.userHistoryData.length ===1){
          alert("User has no history!");
          this.$router.push({path:"/Lottery"});
        }
        
      },
      logOut(){ //loggin out
        try{
            this.$store.commit("SET_AUTHENTICATION",false);
            this.$store.commit("SET_BET",false);
            this.$store.commit("USER_LOGGED_IN",false);
            alert("Log out successful");

            this.$router.push({path:"/"});  
             
        }catch(e){
            alert("Error logging out " + e);
        }
        },
      deleteTableRow: function(idx,index){  //deleting table row and finding DocumentId to delete from database
        this.userHistoryData.splice(idx,1);
        alert("Deleted line from history!");
        console.log(index.playerDocID);
        deleteDoc(doc(db, this.usernameMap, index.playerDocID));
      }


    }


}
</script>

<style scoped>
div{
  border-collapse: collapse;
  display: flex;
  justify-content: center;
  align-items: center;
}
td{
  padding: 5px 20px;
}
#logOutBut{
    position:fixed;
    bottom:94%;
    left:70%;
}
.lostBet{
  color: red;
}
.wonBet{
  color: green;
}


</style>