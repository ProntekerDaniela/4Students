<template>
  <div id="app">
    <HomeIcon class="icon1"/>
    <div class="header">
      <router-link to="/" class="pages mainPage">Головна</router-link>
      <router-link to="/MyOffice" class="pages myOffice">Мій кабінет</router-link>
      <router-link to="/Registration" class="pages myRegistration">Реєстрація</router-link>
      <router-link to="/AboutE" class="pages mySignIn">Види Єшок</router-link>
      <br>
      <br>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {  
  }
}
</script>

<style>
#app{
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: Gold	;
  margin: -8px;
  }
</style>
