<template>
  <b-navbar variant="dark" type="dark">
    <b-navbar-brand>
      <img src="/logo.jpg" class="navbar-logo">
    </b-navbar-brand>

    <b-navbar-nav>
        <b-nav-item to="/">
          Search
        </b-nav-item>
         <b-nav-item to="/additives">
          additives
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
       <template v-if="user">
         <b-nav-item>
          <b>{{ user.name }}</b>
        </b-nav-item>
        <b-nav-item to="/profile">
          Profile
        </b-nav-item>
        </template>
        <template v-else>
          <b-nav-item to="/login">
          Login
        </b-nav-item>
        <b-nav-item to="/register">
          Register
        </b-nav-item>
        </template>
        
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>

<style scoped>
.navbar-logo {
    width: 82px;
    height: 32px;
    border-radius: 4px;
}
</style>