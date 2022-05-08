<template>
  <div class="login-page">
    <b-form @submit.prevent="login" class="login-form">
      <h4>Login</h4>
      <b-form-input placeholder="Email" type="email" v-model="form.email" />
      <b-form-input
        placeholder="Password"
        type="password"
        v-model="form.password"
      />
      <b-button :disabled="busy" variant="primary" type="submit">
          Login
      </b-button>
      <small class="text-muted">
          Do not have an account? <router-link to="/register">Sign up</router-link>
      </small>
      <small class="text-danger" v-if="error">
          {{ error }}
      </small>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      busy: false,
      error: false
    };
  },
  methods: {
      async login(ev) {
          ev.preventDefault();

          this.busy = true;
          this.error = null;

          try {
            await this.$store.dispatch("login", this.form);

            this.$router.push('/');
          } catch(err) {
            this.error = err;
          }

          this.busy = false;
      }
  }
};
</script>

<style scoped>
.login-page {
  min-width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
}

.login-form {
  display: flex;
  width: 400px;
  flex-direction: column;
  row-gap: 16px;
  text-align: center;
}
</style>