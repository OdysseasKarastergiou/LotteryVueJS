<template>
  <div class="bg-green-200" id="app">
    <div id="nav">
      <router-link v-if="this.$store.state.authenticated==false" to="/">Home  |</router-link>
      <router-link v-if="this.$store.state.authenticated==false" to="/Register">Register  |</router-link>
      <router-link to="/Lottery">Lottery  |</router-link>
      <router-link to="/Draw">Draw  |</router-link>
      <router-link to="/History">History</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
