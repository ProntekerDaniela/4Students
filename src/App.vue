<template>
  <div id="app">
    <TheHeader />
    <router-view id="wrapper"/>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue"

export default {
  mounted() {
    this.$store.dispatch('whoami');
  },
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#wrapper {
  display: flex;
  justify-content: center;
  padding: 64px 64px;

  width: 100%;
  height: 100%;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


h2 {
    cursor: pointer;
}
</style>
