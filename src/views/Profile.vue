<template>
  <div class="profile-page">
   <router-link to="/" tag="h2">🍔 DeFood

            </router-link>
    <div class="profile-form">
      <h4>Profile</h4>
      <b-form-group label="Email">
        <b-form-input
          placeholder="Email"
          type="email"
          v-model="form.email"
          disabled
        />
      </b-form-group>
      <b-form-group label="Name">
        <b-form-input placeholder="Name" v-model="form.name" />
      </b-form-group>
      <b-form-group label="Password">
        <b-form-input placeholder="Name" v-model="form.password" />
      </b-form-group>
      <b-form-group label="Allergies">
        <b-form-input placeholder="Allergies, separated by comma" v-model="inputAllergies" />
      </b-form-group>

      <b-button variant="success" @click="save">
        Save
      </b-button>
      <b-button @click="logout" variant="warning">
        Logout
      </b-button>
      <small class="text-danger" v-if="error">
        {{ error }}
      </small>
      <small class="text-success" v-if="success">
          Changes saved
      </small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        allergies: [],
      },
      error: false,
      success: false
    };
  },
  methods: {
    async save() {
        await this.$store.dispatch('updateProfile', this.form);

        this.success = true;
    },
    async logout() {
      await this.$store.dispatch("logout");

      this.$router.push('/login');
    },
  },
  mounted() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
      return;
    }

    this.form = {
      ...this.$store.state.user,
    };
  },
  computed: {
      inputAllergies: {
          get() {
              return this.form.allergies.join(',');
          },
          set(value) {
            this.form.allergies = value.split(',').map(s => s.trim());
          }
      }
  }
};
</script>

<style scoped>
.profile-page {
  margin-top: 100px;
  min-width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
}

.profile-form {

  display: flex;
  width: 400px;
  flex-direction: column;
  row-gap: 16px;
  text-align: center;
}
</style>