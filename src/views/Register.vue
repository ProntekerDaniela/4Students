<template>
  <div class="register-page">
    <b-form @submit.prevent="register" class="register-form">
      <h4>Register</h4>
      <b-form-input
        placeholder="Name"
        v-model="form.name"
        required
      />
      <b-form-input placeholder="Email" type="email" v-model="form.email" required/>
      <b-form-input
        placeholder="Password"
        type="password"
        v-model="form.password"
        required
      />
      <b-form-input
        placeholder="Repeat password"
        type="password"
        v-model="form.repeat"
        required
      />
      <b-button :disabled="busy" variant="primary" type="submit">
          Create account
      </b-button>
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
        name: null,
        email: null,
        password: null,
        repeat: null
      },
      busy: false,
      error: false
    };
  },
  methods: {
      async register(ev) {
          ev.preventDefault();

          if (this.form.repeat !== this.form.password) {
            this.error = 'Passwords do not match';
            return;
          }

          this.busy = true;
          this.error = null;
          
          try {
            await this.$store.dispatch("register", this.form);

            this.$router.push('/profile');
          } catch(err) {
            this.error = err.message;
          }

          this.busy = false;
      }
  }
};
</script>

<style scoped>
.register-page {
  min-width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
}

.register-form {
  display: flex;
  width: 400px;
  flex-direction: column;
  row-gap: 16px;
  text-align: center;
}
</style>