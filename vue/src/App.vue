<template>
  <div id="app">
    <router-link
      v-if="authenticated"
      to="/login"
      v-on:click.native="logout()"
      replace
      >Logout</router-link
    >
    <Header />
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "test",
        password: "password",
      },
    };
  },
  mounted() {
    if (this.$route.path != "/login") {
      if (!this.authenticated) {
        this.$router.replace({ name: "login" });
      }
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
