<template>

<table class="table-fixed border-collapse border border-green-800">
  <thead id="table">
    <th class="border-collapse border border-green-800">Draw Numbers</th>
    <th class="border-collapse border border-green-800">Status</th>
    <th class="border-collapse border border-green-800">Amount Won/Lost</th>
  </thead>
  <tbody >
    <tr v-for="row in userHistoryData" :key="row.id">
      <td class="border-collapse border border-green-800">{{row.timestamp}}</td>
      <td class="border-collapse border border-green-800">{{row.playedBetStatus}}</td>
      <td class="border-collapse border border-green-800">{{row.playerWinnings}}</td>



    </tr>

  </tbody>
</table>
  
</template>

<script>
import { db } from '../main.js'
import { collection, getDocs } from "firebase/firestore";


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
          playedBetStatus:""}]
      }

    },

    mounted(){
      this.showPlayerData();
    },
    methods:{
      async showPlayerData(){
        const querySnapshot = await getDocs(collection(db,this.$store.state.users.email));
        querySnapshot.forEach((doc) => {
        this.userHistoryData.push({timestamp:doc.data().betTimestamp});
        this.userHistoryData.push({drawNumbersArray:doc.data().drawNumbers});
        this.userHistoryData.push({playerNumbersArray:doc.data().playerNumbers});
        this.userHistoryData.push({playerWinnings:doc.data().MoneyWon});
        this.userHistoryData.push({playedBetStatus:doc.data().BetStatus});

        });
 

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


</style>
playerWinnings