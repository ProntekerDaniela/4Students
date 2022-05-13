<template>
  <div class="home-page">
    <div class="search-form">
      <p>Enter composition</p>
      <small v-if="user">
        Logged in as
        <router-link to="/profile">{{ user.name }}</router-link> with
        {{ user.allergies.length }} allergies
      </small>
      <small v-else>
        Allergic reactions will be shown only for registered users.
        <router-link to="/login"> Login </router-link>
      </small>
      <b-form-input placeholder="Search..." v-model="search" />
    </div>
    <div class="products-list">
      <small class="text-muted" v-if="busy">Loading...</small>
      <additive-card
        v-for="additive in results"
        :key="additive.code"
        :additive="additive"
      />
    </div>
  </div>
</template>

<script>
import AdditiveCard from "../components/AdditiveCard.vue";

import AdditiveAPI from "../api/additives";

export default {
  data() {
    return {
      search: "E101, E230, E345",
      results: [],
      busy: false,
    };
  },
  watch: {
    search() {
      this.executeSearch();
    },
  },
  methods: {
    async executeSearch() {
      if (!this.search) {
        this.results = [];
        return;
      }

      this.busy = true;
      this.results = await AdditiveAPI.getComposition(this.search);
      console.log(this.results);
      this.busy = false;
    },
    async logout() {
      await this.$store.dispatch("logout");
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components: {
    AdditiveCard,
  },
  async mounted() {
    await this.executeSearch();
  },
};
</script>

<style scoped>
.home-page {
  min-width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
}

.search-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
}

.products-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  width: 100%;
}

small {
  font-size: 12px;
}
</style>