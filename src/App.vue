<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/categories">Categories</router-link>
    </div>
    <b-container id="app-container">
      <router-view />
    </b-container>
  </div>
</template>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app-container{
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
