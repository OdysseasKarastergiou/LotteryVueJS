!function(){"use strict";var e,t,r,n,o,s,i,a,u={1274:function(e,t,r){r.d(t,{db:function(){return k},h:function(){return $}}),r(7139);var n=r(1238),o=r(4899),s=(r(2053),r(1900)),i=(0,s.Z)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-green-200",attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[0==this.$store.state.authenticated?r("router-link",{attrs:{to:"/"}},[e._v("Home  |")]):e._e(),e._v(" "),0==this.$store.state.authenticated?r("router-link",{attrs:{to:"/Register"}},[e._v("Register  |")]):e._e(),e._v(" "),r("router-link",{attrs:{to:"/Lottery"}},[e._v("Lottery  |")]),e._v(" "),r("router-link",{attrs:{to:"/Draw"}},[e._v("Draw  |")]),e._v(" "),r("router-link",{attrs:{to:"/History"}},[e._v("History")])],1),e._v(" "),r("router-view")],1)}),[],!1,null,null,null).exports,a=r(7415),u=r(3234),l=(r(6451),(0,s.Z)({name:"LoginModal",data:function(){return{input:{emailInput:"",passwordInput:""}}},methods:{loginSubmit:function(){this.$emit("loginEvent",this.input.emailInput,this.input.passwordInput)}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"model font-serif text-2xl",attrs:{id:"model-login"}},[r("div",{staticClass:"model-content"},[r("form",{attrs:{id:"login-form"},on:{submit:function(t){return t.preventDefault(),e.loginSubmit.apply(null,arguments)}}},[r("div",{staticClass:"input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200\n             rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.emailInput,expression:"input.emailInput"}],attrs:{type:"email",id:"login-email",placeholder:"email@example.com",required:""},domProps:{value:e.input.emailInput},on:{input:function(t){t.target.composing||e.$set(e.input,"emailInput",t.target.value)}}}),e._v(" "),r("label",{staticClass:"text-black font-italic text-4xl py-1 px-2 ",attrs:{for:"login-email"}},[e._v("\n                Email Address")])]),e._v(" "),r("div",{staticClass:"input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200\n             rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.passwordInput,expression:"input.passwordInput"}],attrs:{type:"password",id:"login-password",placeholder:"password",required:""},domProps:{value:e.input.passwordInput},on:{input:function(t){t.target.composing||e.$set(e.input,"passwordInput",t.target.value)}}}),e._v(" "),r("label",{staticClass:" text-black font-italic py-1 px-2 text-4xl",attrs:{for:"login-password"}},[e._v("\n                Input Password")])]),e._v(" "),r("button",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500\n             hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{id:"logInButtonId"}},[e._v("Log In")]),e._v(" "),r("h2",{attrs:{id:"logIn-error"}})])])])}),[],!1,null,"f5480dfe",null)),c={name:"Login",components:{LoginModal:l.exports},methods:{login:function(e,t){var r=this;console.log(e+t);var n=(0,u.v0)();(0,u.e5)(n,e,t).then((function(n){var o=e.substring(0,e.lastIndexOf("@")),s=t;n.user,r.$store.commit("SET_AUTHENTICATION",!0),r.$store.dispatch("authData",o,s),r.$store.commit("USER_LOGGED_IN",!0),r.$router.push({path:"Lottery",params:{name:o}}).catch((function(){}))})).catch((function(e){console.log(e.message),document.getElementById("logIn-error").innerHTML="wrong email/password"}))}}},d=(0,s.Z)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("login-modal",{on:{loginEvent:e.login}})}),[],!1,null,"4898169a",null).exports,p=(r(8921),(0,s.Z)({name:"RegisterModal",data:function(){return{input:{emailInput:"",passwordInput:""}}},methods:{registerSubmit:function(){this.$emit("registerEvent",this.input.emailInput,this.input.passwordInput)}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"model font-serif text-2xl",attrs:{id:"model-register"}},[r("div",{staticClass:"model-content"},[r("form",{attrs:{id:"register-form"},on:{submit:function(t){return t.preventDefault(),e.registerSubmit.apply(null,arguments)}}},[r("div",{staticClass:"input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 \n      rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.emailInput,expression:"input.emailInput"}],attrs:{type:"email",id:"register-email",placeholder:"email@example.com",required:""},domProps:{value:e.input.emailInput},on:{input:function(t){t.target.composing||e.$set(e.input,"emailInput",t.target.value)}}}),e._v(" "),r("label",{staticClass:"text-black font-italic py-1 px-2 text-4xl",attrs:{for:"register-email"}},[e._v("\n        Email Address")])]),e._v(" "),r("div",{staticClass:"input-field appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 \n      rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.input.passwordInput,expression:"input.passwordInput"}],attrs:{type:"password",id:"register-password",placeholder:"password",required:""},domProps:{value:e.input.passwordInput},on:{input:function(t){t.target.composing||e.$set(e.input,"passwordInput",t.target.value)}}}),e._v(" "),r("label",{staticClass:" text-black font-italic py-1 px-2 text-4xl",attrs:{for:"register-password"}},[e._v("\n       Choose Password")])]),e._v(" "),r("button",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 \n      hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{type:"submit",id:"buttonId"}},[e._v("\n      Register")]),e._v(" "),r("h2",{attrs:{id:"reg-error"}})])])])}),[],!1,null,"caa049ae",null)),f={name:"Register",components:{RegisterModal:p.exports},methods:{register:function(e,t){var r=this,n=(0,u.v0)();(0,u.Xb)(n,e,t).then((function(n){var o=e.substring(0,e.lastIndexOf("@")),s=t;n.user;try{r.$store.commit("SET_AUTHENTICATION",!0),r.$store.dispatch("authData",o,s),r.$store.commit("USER_LOGGED_IN",!0),alert("Register Successful")}catch(e){alert("Error registering")}r.$router.push({path:"Lottery"})})).catch((function(e){document.getElementById("reg-error").innerHTML="E-mail in use/weak password"}))}}},h=(0,s.Z)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("register-modal",{on:{registerEvent:e.register}})}),[],!1,null,"2eb415ea",null).exports,m=r(9142),v=r(4383),g=(r(690),(0,s.Z)({name:"SelectLottery",data:function(){return{items:5,selections:[""]}},methods:{submitNumbersE:function(){this.$emit("submitEvent",this.selections)}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.items,(function(t,n){return r("select",{directives:[{name:"model",rawName:"v-model",value:e.selections[n],expression:"selections[index]"}],key:t,staticClass:"bg-purple-300 m-5",attrs:{id:"drop1"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.selections,n,t.target.multiple?r:r[0])}}},e._l(30,(function(t){return r("option",{key:t,attrs:{id:"drop1-content"},domProps:{value:t}},[e._v("\n        "+e._s(t))])})),0)})),e._v(" "),r("button",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-1\n     hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{id:"sumbitButId"},on:{click:e.submitNumbersE}},[e._v("Submit")])],2)}),[],!1,null,"d330f468",null).exports),y=(0,s.Z)({name:"LogOut",methods:{logOutE:function(){this.$emit("logOutEvent")}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 \n        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{id:"logOutBut"},on:{click:e.logOutE}},[e._v("Log Out")])}),[],!1,null,"10a9d709",null).exports,b={name:"Lottery",components:{SelectLottery:g,LogOut:y},computed:(0,v.Z)({},(0,o.Se)({usernameMap:"usernameMap"})),props:{checkProp:{hasDuplicates:{type:Boolean}}},methods:{submitNumbers:function(e){var t,r=0,n=!1,o=[],s=(0,m.Z)(e);try{for(s.s();!(t=s.n()).done;){t.value&&(r+=1);for(var i=0;i<e.length;i++)for(var a=i+1;a<e.length;a++)e[i]===e[a]&&(this.hasDuplicates=!0);if(5!=r||this.hasDuplicates)document.getElementById("resultMessage").innerHTML="Need to fill all 5 / Duplicate Pick",n=!1;else{var u,l=(0,m.Z)(e);try{for(l.s();!(u=l.n()).done;){var c=u.value;o.push(c),n=!0}}catch(e){l.e(e)}finally{l.f()}}}}catch(e){s.e(e)}finally{s.f()}if(n){this.$store.commit("SET_BET",!0),this.$store.commit("SET_FINISH_DRAW",!1);for(var d=0;d<e.length;d++)this.$store.commit("SET_BET_ARRAY_DATA",o[d]);this.$router.push({name:"Draw"})}this.hasDuplicates=!1,e.splice(0),r=0},logOut:function(){try{this.$store.commit("SET_AUTHENTICATION",!1),this.$store.commit("SET_BET",!1),this.$store.commit("USER_LOGGED_IN",!1),alert("Log out successful"),this.$router.push({path:"/"})}catch(e){alert("Error logging out "+e)}}}},_=(r(1772),(0,s.Z)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"p-5 m-1",attrs:{id:"pickId"}},[e._v("\n            Welcome, "+e._s(e.usernameMap)+". Pick the numbers!\n        ")]),e._v(" "),r("div",[r("SelectLottery",{on:{submitEvent:e.submitNumbers}})],1),e._v(" "),r("log-out",{on:{logOutEvent:e.logOut}}),e._v(" "),r("h1",{attrs:{id:"resultMessage"}})],1)}),[],!1,null,"dd03a2ec",null).exports),w=r(8589),E={name:"Draw",data:function(){return{betsCounter:1,counter:1,resultsArray:[],currTimestamp:"",moneyWon:"",winStatus:"",betId:""}},computed:(0,v.Z)({},(0,o.Se)({userMap:"userBetMap"})),mounted:function(){this.playerBets(),this.IntervalMethod=setInterval(this.randomResults,4e3),document.getElementById("drawingText").style.visibility="visible",this.betId=Math.floor(1e4*Math.random())+1},methods:{randomNumber:function(){var e,t=Math.floor(30*Math.random())+1,r=(0,m.Z)(this.resultsArray);try{for(r.s();!(e=r.n()).done;)for(var n=e.value;n===t;)t=Math.floor(30*Math.random())+1}catch(e){r.e(e)}finally{r.f()}this.resultsArray.push(t);var o,s=this.resultsArray.indexOf(t)+1,i=(0,m.Z)(this.userMap);try{for(i.s();!(o=i.n()).done;){if(o.value===t){document.getElementById("result"+s).style.backgroundColor="green";break}document.getElementById("result"+s).style.backgroundColor="red"}}catch(e){i.e(e)}finally{i.f()}return t},randomResults:function(){document.getElementById("result"+this.counter).innerHTML=this.randomNumber(),this.counter=this.counter+1,this.counter>5&&(clearInterval(this.IntervalMethod),this.checkingResults(),document.getElementById("HistoryBut").style.visibility="visible",this.currTimestamp=Date.now())},checkingResults:function(){var e,t=0,r=(0,m.Z)(this.userMap);try{for(r.s();!(e=r.n()).done;)for(var n=e.value,o=0;o<=this.resultsArray.length;o++)n===this.resultsArray[o]?(t+=1,document.getElementById("finalResult").innerHTML="You got "+t,3===t?(document.getElementById("finalResult").innerHTML+=" | And Win 5$",this.moneyWon="5$",this.winStatus="won"):4===t?(document.getElementById("finalResult").innerHTML+=" | And Win 10$",this.moneyWon="10$",this.winStatus="won"):5===t&&(document.getElementById("finalResult").innerHTML+=" | And Win 20",this.moneyWon="20$",this.winStatus="won")):0===t&&(document.getElementById("finalResult").innerHTML="Good Job! You got 0",this.moneyWon="0$",this.winStatus="lost")}catch(e){r.e(e)}finally{r.f()}document.getElementById("drawingText").innerHTML="Results are in!",this.$store.commit("SET_FINISH_DRAW",!0),this.$store.commit("CLEAR_BET_ARRAY_DATA"),this.$store.commit("SET_BET",!1)},playerBets:function(){var e,t=(0,m.Z)(this.userMap);try{for(t.s();!(e=t.n()).done;){var r=e.value;document.getElementById("myNumber"+this.betsCounter).innerHTML=r,this.betsCounter=this.betsCounter+1}}catch(e){t.e(e)}finally{t.f()}},saveToHistory:function(){try{(0,w.pl)((0,w.JU)(k,this.$store.state.users.email,this.betId+""),{betTimestamp:this.currTimestamp,drawNumbers:this.resultsArray,playerNumbers:this.userMap,MoneyWon:this.moneyWon,BetStatus:this.winStatus},{merge:!0}),alert("Saved To History Succesfully")}catch(e){console.log("error in "+e)}},logOut:function(){try{this.$store.commit("SET_AUTHENTICATION",!1),this.$store.commit("SET_BET",!1),this.$store.commit("USER_LOGGED_IN",!1),alert("Log out successful"),this.$router.push({path:"/"})}catch(e){alert("Error logging out "+e)}}}},I=(r(4875),(0,s.Z)(E,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"text-purple-500 font-bold",attrs:{id:"playerBetsT"}},[e._v("Player Bets")]),e._v(" "),r("div",{staticClass:"text-purple-500 font-bold",attrs:{id:"resultBetsT"}},[e._v("Final Results ")]),e._v(" "),r("p",{staticClass:"text-yellow-700 font-extrabold",attrs:{id:"myNumber1"}}),e._v(" "),r("p",{staticClass:"text-yellow-700 font-extrabold",attrs:{id:"myNumber2"}}),e._v(" "),r("p",{staticClass:"text-yellow-700 font-extrabold",attrs:{id:"myNumber4"}}),e._v(" "),r("p",{staticClass:"text-yellow-700 font-extrabold",attrs:{id:"myNumber5"}}),e._v(" "),r("p",{staticClass:"text-yellow-700 font-extrabold",attrs:{id:"myNumber3"}}),e._v(" "),r("p",{staticClass:"rounded-full h-24 w-24 flex items-center justify-center",attrs:{id:"result1"}}),e._v(" "),r("p",{staticClass:"rounded-full h-24 w-24 flex items-center justify-center",attrs:{id:"result2"}}),e._v(" "),r("p",{staticClass:"rounded-full h-24 w-24 flex items-center justify-center",attrs:{id:"result3"}}),e._v(" "),r("p",{staticClass:"rounded-full h-24 w-24 flex items-center justify-center",attrs:{id:"result4"}}),e._v(" "),r("p",{staticClass:"rounded-full h-24 w-24 flex items-center justify-center",attrs:{id:"result5"}}),e._v(" "),r("p",{staticClass:"font-serif text-2xl animate-bounce w-10 h-10 font-bold",attrs:{id:"drawingText"}},[e._v("Drawing Numbers...")]),e._v(" "),"lost"==this.winStatus?r("img",{staticClass:"imgC",attrs:{src:"https://www.onlygfx.com/wp-content/uploads/2020/05/fail-stamp-7.png"}}):e._e(),e._v(" "),"won"==this.winStatus?r("img",{staticClass:"imgC",attrs:{src:"https://img.favpng.com/16/6/19/stock-photography-car-royalty-free-png-favpng-E0kmgvAXMbienrUxAzw37dHwF_t.jpg"}}):e._e(),e._v(" "),r("p",{attrs:{id:"finalResult"}}),e._v(" "),r("button",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-1 \n    hover:scale-110 flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{id:"HistoryBut"},on:{click:e.saveToHistory}},[e._v("\n    Save Result")]),e._v(" "),r("button",{staticClass:"transition duration-500 ease-in-out transform \n    hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",attrs:{id:"logOutBut"},on:{click:e.logOut}},[e._v("\n    Log Out")])])}),[],!1,null,"58c36b26",null).exports),x=r(6398),T=(r(7450),r(9783),r(4328),{name:"History",components:{LogOut:y},data:function(){return{userHistoryData:[{drawNumbersArray:"",timestamp:"",playerNumbersArray:"",playerWinnings:"",playedBetStatus:"",playerDocID:""}]}},computed:(0,v.Z)({sortedArray:function(){return this.userHistoryData.sort((function(e,t){return e.timestamp<t.timestamp?-1:e.timestamp>t.timestamp?1:0}))}},(0,o.Se)({usernameMap:"usernameMap"})),mounted:function(){this.showPlayerData()},methods:{showPlayerData:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,w.PL)((0,w.hJ)(k,e.usernameMap));case 2:t.sent.forEach((function(t){e.userHistoryData.push({timestamp:t.data().betTimestamp,drawNumbersArray:t.data().drawNumbers,playerNumbersArray:t.data().playerNumbers,playerWinnings:t.data().MoneyWon,playedBetStatus:t.data().BetStatus,playerDocID:t.id})})),1===e.userHistoryData.length&&(alert("User has no history!"),e.$router.push({path:"/Lottery"}));case 5:case"end":return t.stop()}}),t)})))()},logOut:function(){try{this.$store.commit("SET_AUTHENTICATION",!1),this.$store.commit("SET_BET",!1),this.$store.commit("USER_LOGGED_IN",!1),alert("Log out successful"),this.$router.push({path:"/"})}catch(e){alert("Error logging out "+e)}},deleteTableRow:function(e,t){this.userHistoryData.splice(e,1),alert("Deleted line from history!"),console.log(t.playerDocID),(0,w.oe)((0,w.JU)(k,this.usernameMap,t.playerDocID))}}}),A=(r(6323),(0,s.Z)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("table",{staticClass:"table-striped table-auto bg-purple-300 shadow-inner text-4xl opacity-75"},[e._m(0),e._v(" "),r("tbody",[e._l(e.sortedArray,(function(t,n){return r("tr",{key:n},[r("td",{staticClass:"border-collapse border border-green-800 font-extrabold text-yellow-600"},[e._v("\n        "+e._s(t.drawNumbersArray))]),e._v(" "),r("td",{staticClass:"border-collapse border border-green-800 font-bold",class:{lostBet:"lost"===t.playedBetStatus,wonBet:"won"===t.playedBetStatus}},[e._v("\n      "+e._s(t.playedBetStatus))]),e._v(" "),r("td",{staticClass:"border-collapse border border-green-800 font-bold",class:{lostBet:"0$"===t.playerWinnings,wonBet:"0$"!==t.playerWinnings}},[e._v("\n      "+e._s(t.playerWinnings))]),e._v(" "),r("td",[r("button",{staticClass:"text-yellow-900 font-semibold",on:{click:function(r){return e.deleteTableRow(n,t)}}},[e._v("\n      Delete")])])])})),e._v(" "),r("log-out",{on:{logOutEvent:e.logOut}})],2)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{attrs:{id:"table"}},[r("th",{staticClass:"border-collapse border border-green-800 text-red-800"},[e._v("Draw Numbers")]),e._v(" "),r("th",{staticClass:"border-collapse border border-green-800 text-red-800"},[e._v("Status")]),e._v(" "),r("th",{staticClass:"border-collapse border border-green-800 text-red-800"},[e._v("Amount Won")]),e._v(" "),r("th",{staticClass:"border-collapse border border-green-800 text-red-800"},[e._v("Delete Entry")])])}],!1,null,"64d91c43",null).exports),D=(r(1855),(0,s.Z)({},(function(){var e=this;e.$createElement;return e._self._c,e._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"centerTxt font-serif text-2xl animate-bounce font-bold"},[e._v("Welcome to my Lottery VueJS App, procceed to Home/Register to start!")]),e._v(" "),r("img",{staticClass:"centerImg",attrs:{src:"https://ichef.bbci.co.uk/images/ic/1200x675/p020xqdj.jpg"}})])}],!1,null,"735f077e",null).exports),C=r(9364);n.Z.use(a.Z);var S=[{path:"/",name:"Home",component:d,beforeEnter:function(e,t,r){1==$.state.userLoggedIn?r(!1):r()}},{path:"/register",name:"Register",component:h,beforeEnter:function(e,t,r){1==$.state.userLoggedIn?r(!1):r()}},{path:"/LotteryVueJS",name:"MainPage",component:D},{path:"/Lottery",name:"Lottery",component:_,beforeEnter:function(e,t,r){0==$.state.authenticated||0==$.state.finishedDraw?r(!1):r()}},{path:"/Draw",name:"Draw",component:I,beforeEnter:function(e,t,r){0==$.state.userPlayedBet?r(!1):r()}},{path:"/History",name:"History",component:A,beforeEnter:function(e,t,r){0==$.state.authenticated?r(!1):r()}}],H=new a.Z({mode:"history",base:C.env.BASE_URL,routes:S});r(9878),(0,r(251).ZF)({apiKey:"AIzaSyAYL9uP1fQvKHyhVErWLVbj3-ThU8FrPcA",authDomain:"assproj-5fb50.firebaseapp.com",projectId:"assproj-5fb50",storageBucket:"assproj-5fb50.appspot.com",messagingSenderId:"528217920060",appId:"1:528217920060:web:622c699759f0fc0edda939"});var k=(0,w.ad)();n.Z.config.productionTip=!1,n.Z.use(a.Z),n.Z.use(o.ZP);var $=new o.ZP.Store({state:{authenticated:!1,userPlayedBet:!1,finishedDraw:!0,userLoggedIn:!1,users:{email:"",password:"",betArray:[]},UserHistory:{timestamp:"",drawNumbers:"",playerBet:"",totalWon:""}},mutations:{SET_AUTHENTICATION:function(e,t){e.authenticated=t},SET_FINISH_DRAW:function(e,t){e.finishedDraw=t},SET_BET:function(e,t){e.userPlayedBet=t},USER_LOGGED_IN:function(e,t){e.userLoggedIn=t},SET_USER_DATA:function(e,t,r){e.users.email=t,e.users.password=r},SET_BET_ARRAY_DATA:function(e,t){e.users.betArray.push(t)},CLEAR_BET_ARRAY_DATA:function(e){e.users.betArray.splice(0)},SET_HISTORY_DATA:function(e,t,r,n,o){e.users.UserHistory.timestamp=t,e.users.UserHistory.drawNumbers=r,e.users.UserHistory.playerBet=n,e.users.UserHistory.totalWon=o}},actions:{authData:function(e,t,r){e.commit("SET_USER_DATA",t,r)}},getters:{userBetMap:function(e){return e.users.betArray},usernameMap:function(e){return e.users.email},UserHistory:function(e){return e.UserHistory}}});new n.Z({router:H,el:"#app",store:$,getFirestore:function(){return{UserHistory:k.collection("UserHistory")}},render:function(e){return e(i)}}).$mount("#app")},2053:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},6451:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},690:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},8921:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},4875:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},6323:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},1772:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},1855:function(e,t,r){var n=r(7498)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},l={};function c(e){var t=l[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=l[e]={id:e,loaded:!1,exports:{}};try{var n={id:e,module:r,factory:u[e],require:c};c.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.loaded=!0,r.exports}c.m=u,c.c=l,c.i=[],e=[],c.O=function(t,r,n,o){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var i=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(c.O).every((function(e){return c.O[e](r[a])}))?r.splice(a--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.hu=function(e){return e+"."+c.h()+".hot-update.js"},c.miniCssF=function(e){return"main.css"},c.hmrF=function(){return"main."+c.h()+".hot-update.json"},c.h=function(){return"3df42f7d0b5dfae60c87"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},r="my-webpack-project:",c.l=function(e,n,o,s){if(t[e])t[e].push(n);else{var i,a;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){i=d;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",r+o),i.src=e),t[e]=[n];var p=function(r,n){i.onerror=i.onload=null,clearTimeout(f);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),r)return r(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),a&&document.head.appendChild(i)}},c.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e,t,r,n,o={},s=c.c,i=[],a=[],u="idle";function l(e){u=e;for(var t=[],r=0;r<a.length;r++)t[r]=a[r].call(null,e);return Promise.all(t)}function d(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return d(e)}))}function p(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return l("check").then(c.hmrM).then((function(n){return n?l("prepare").then((function(){var o=[];return t=[],r=[],Promise.all(Object.keys(c.hmrC).reduce((function(e,t){return c.hmrC[t](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return d((function(){return e?h(e):l("ready").then((function(){return o}))}))}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==u?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var t=r.map((function(t){return t(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var s=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var i,a=l("apply"),u=function(e){i||(i=e)},c=[];return t.forEach((function(e){if(e.apply){var t=e.apply(u);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),Promise.all([s,a]).then((function(){return i?l("fail").then((function(){throw i})):n?h(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):l("idle").then((function(){return c}))}))}function m(){if(n)return r||(r=[]),Object.keys(c.hmrI).forEach((function(e){n.forEach((function(t){c.hmrI[e](t,r)}))})),n=void 0,!0}c.hmrD=o,c.i.push((function(h){var m,v,g,y,b=h.module,_=function(r,n){var o=s[n];if(!o)return r;var a=function(t){if(o.hot.active){if(s[t]){var a=s[t].parents;-1===a.indexOf(n)&&a.push(n)}else i=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),i=[];return r(t)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&"e"!==p&&Object.defineProperty(a,p,c(p));return a.e=function(e){return function(e){switch(u){case"ready":return l("prepare"),t.push(e),d((function(){return l("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},a}(h.require,h.id);b.hot=(m=h.id,v=b,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){i=v.parents.slice(),e=g?void 0:m,c(m)},active:!0,accept:function(e,t,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=t||function(){},y._acceptedErrorHandlers[e[n]]=r;else y._acceptedDependencies[e]=t||function(){},y._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._declinedDependencies[e[t]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=y._disposeHandlers.indexOf(e);t>=0&&y._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":r=[],Object.keys(c.hmrI).forEach((function(e){c.hmrI[e](m,r)})),l("ready");break;case"ready":Object.keys(c.hmrI).forEach((function(e){c.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:p,apply:f,status:function(e){if(!e)return u;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);t>=0&&a.splice(t,1)},data:o[m]},e=void 0,y),b.parents=i,b.children=[],i=[],h.require=_})),c.hmrC={},c.hmrI={}}(),function(){var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e}(),n=function(e,t,r,n){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(s){if(o.onerror=o.onload=null,"load"===s.type)r();else{var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=a,o.parentNode.removeChild(o),n(u)}},o.href=t,document.head.appendChild(o),o},o=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var i;if((o=(i=s[n]).getAttribute("data-href"))===e||o===t)return i}},s=[],i=[],a=function(e){return{dispose:function(){for(var e=0;e<s.length;e++){var t=s[e];t.parentNode&&t.parentNode.removeChild(t)}s.length=0},apply:function(){for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}},c.hmrC.miniCss=function(e,t,r,u,l,d){l.push(a),e.forEach((function(e){var t=c.miniCssF(e),r=c.p+t,a=o(t,r);a&&u.push(new Promise((function(t,o){var u=n(e,r,(function(){u.as="style",u.rel="preload",t()}),o);s.push(a),i.push(u)})))}))},function(){var e,t,r,n,o=c.hmrS_jsonp=c.hmrS_jsonp||{179:0},s={};function i(e){return new Promise((function(t,r){s[e]=t;var n=c.p+c.hu(e),o=new Error;c.l(n,(function(t){if(s[e]){s[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r(o)}}))}))}function a(s){function i(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),s=o.id,i=o.chain,u=c.c[s];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(u.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var l=0;l<u.parents.length;l++){var d=u.parents[l],p=c.c[d];if(p){if(p.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([d]),moduleId:s,parentId:d};-1===t.indexOf(d)&&(p.hot._acceptedDependencies[s]?(r[d]||(r[d]=[]),a(r[d],[s])):(delete r[d],t.push(d),n.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}c.f&&delete c.f.jsonpHmr,e=void 0;var u={},l=[],d={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in t)if(c.o(t,f)){var h,m=t[f],v=!1,g=!1,y=!1,b="";switch((h=m?i(f):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":s.onDeclined&&s.onDeclined(h),s.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":s.onDeclined&&s.onDeclined(h),s.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":s.onUnaccepted&&s.onUnaccepted(h),s.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+b));break;case"accepted":s.onAccepted&&s.onAccepted(h),g=!0;break;case"disposed":s.onDisposed&&s.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(f in d[f]=m,a(l,h.outdatedModules),h.outdatedDependencies)c.o(h.outdatedDependencies,f)&&(u[f]||(u[f]=[]),a(u[f],h.outdatedDependencies[f]));y&&(a(l,[h.moduleId]),d[f]=p)}t=void 0;for(var _,w=[],E=0;E<l.length;E++){var I=l[E],x=c.c[I];x&&(x.hot._selfAccepted||x.hot._main)&&d[I]!==p&&!x.hot._selfInvalidated&&w.push({module:I,require:x.hot._requireSelf,errorHandler:x.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var t,n=l.slice();n.length>0;){var s=n.pop(),i=c.c[s];if(i){var a={},d=i.hot._disposeHandlers;for(E=0;E<d.length;E++)d[E].call(null,a);for(c.hmrD[s]=a,i.hot.active=!1,delete c.c[s],delete u[s],E=0;E<i.children.length;E++){var p=c.c[i.children[E]];p&&(e=p.parents.indexOf(s))>=0&&p.parents.splice(e,1)}}}for(var f in u)if(c.o(u,f)&&(i=c.c[f]))for(_=u[f],E=0;E<_.length;E++)t=_[E],(e=i.children.indexOf(t))>=0&&i.children.splice(e,1)},apply:function(e){for(var t in d)c.o(d,t)&&(c.m[t]=d[t]);for(var r=0;r<n.length;r++)n[r](c);for(var o in u)if(c.o(u,o)){var i=c.c[o];if(i){_=u[o];for(var a=[],p=[],f=[],h=0;h<_.length;h++){var m=_[h],v=i.hot._acceptedDependencies[m],g=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==a.indexOf(v))continue;a.push(v),p.push(g),f.push(m)}}for(var y=0;y<a.length;y++)try{a[y].call(null,_)}catch(t){if("function"==typeof p[y])try{p[y](t,{moduleId:o,dependencyId:f[y]})}catch(r){s.onErrored&&s.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[y],error:r,originalError:t}),s.ignoreErrored||(e(r),e(t))}else s.onErrored&&s.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[y],error:t}),s.ignoreErrored||e(t)}}}for(var b=0;b<w.length;b++){var E=w[b],I=E.module;try{E.require(I)}catch(t){if("function"==typeof E.errorHandler)try{E.errorHandler(t,{moduleId:I,module:c.c[I]})}catch(r){s.onErrored&&s.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:r,originalError:t}),s.ignoreErrored||(e(r),e(t))}else s.onErrored&&s.onErrored({type:"self-accept-errored",moduleId:I,error:t}),s.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdatemy_webpack_project=function(e,r,o){for(var i in r)c.o(r,i)&&(t[i]=r[i]);o&&n.push(o),s[e]&&(s[e](),s[e]=void 0)},c.hmrI.jsonp=function(e,o){t||(t={},n=[],r=[],o.push(a)),c.o(t,e)||(t[e]=c.m[e])},c.hmrC.jsonp=function(s,u,l,d,p,f){p.push(a),e={},r=u,t=l.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],s.forEach((function(t){c.o(o,t)&&void 0!==o[t]&&(d.push(i(t)),e[t]=!0)})),c.f&&(c.f.jsonpHmr=function(t,r){e&&!c.o(e,t)&&c.o(o,t)&&void 0!==o[t]&&(r.push(i(t)),e[t]=!0)})},c.hmrM=function(){if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(c.p+c.hmrF()).then((function(e){if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},c.O.j=function(e){return 0===o[e]};var u=function(e,t){var r,n,s=t[0],i=t[1],a=t[2],u=0;if(s.some((function(e){return 0!==o[e]}))){for(r in i)c.o(i,r)&&(c.m[r]=i[r]);if(a)var l=a(c)}for(e&&e(t);u<s.length;u++)n=s[u],c.o(o,n)&&o[n]&&o[n][0](),o[s[u]]=0;return c.O(l)},l=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];l.forEach(u.bind(null,0)),l.push=u.bind(null,l.push.bind(l))}();var d=c.O(void 0,[736],(function(){return c(1274)}));d=c.O(d)}();