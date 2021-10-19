<template>
<div>
<table class="table-striped table-auto bg-purple-300 shadow-inner opacity-75 ">
  <thead id="table">
    <th class="border-collapse border border-green-800">Draw Numbers</th>
    <th class="border-collapse border border-green-800">Status</th>
    <th class="border-collapse border border-green-800">Amount Won/Lost</th>
    <th class="border-collapse border border-green-800">s</th>
  </thead>
  <tbody>
    <tr v-for="(row,i) in sortedArray" v-bind:key="i">
      <td class="border-collapse border border-green-800">{{row.drawNumbersArray}}</td>
      <td class="border-collapse border border-green-800 font-bold">{{row.playedBetStatus}}</td>
      <td class="border-collapse border border-green-800 font-bold">{{row.playerWinnings}}</td>
      <td><button @click='deleteTableRow(i)'>Delete</button></td>
    </tr>

  </tbody>
</table>
<button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" v-on:click="logOut" id="logOutBut">Log Out</button>
</div>

  
</template>

<script>
import { db } from '../main.js'
import { collection, getDocs } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";


export default {
    name: 'History',
    props: {
    msg: String

    },
    data(){
      return{
        userHistoryData:[{
          drawNumbersArray:"",
          timestamp:"",
          playerNumbersArray:"",
          playerWinnings:"",
          playedBetStatus:""}],
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
          }
},
    mounted(){
      this.showPlayerData();
    },
    methods:{
      async showPlayerData(){  //getting player history from database 
        const querySnapshot = await getDocs(collection(db,this.$store.state.users.email));
        querySnapshot.forEach((doc) => {
        this.userHistoryData.push({timestamp:doc.data().betTimestamp,drawNumbersArray:doc.data().drawNumbers,
        playerNumbersArray:doc.data().playerNumbers,playerWinnings:doc.data().MoneyWon,playedBetStatus:doc.data().BetStatus});
        });
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
      deleteTableRow: function(idx){  //deleting table row
        this.userHistoryData.splice(idx,1);
        alert("Deleted line from history!");
        deleteDoc(collection(db, this.$store.state.users.email, idx));
      }


    }


}
</script>

<style scoped>
table{
  border-collapse: collapse;
}
td{
  padding: 5px 20px;
}
#logOutBut{
    position:fixed;
    bottom:94%;
    left:70%;
}


</style>