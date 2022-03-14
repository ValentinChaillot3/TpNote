<template>
  <div id="register">
    <h1>Inscription</h1>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Identifiant"
    />
    <br />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Mots de passe"
    />
    <br />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Confirmer mots de passe"
    />
    <br />
    <button type="button" v-on:click="register()">Inscription</button>
    <div id="retour">
      <router-link to="/login"><p>retour</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (
          this.input.username === this.$parent.mockAccount.username &&
          this.input.password === this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
#register {
  width: 500px;
  border: 1px solid #CCCCCC;
  border-radius: 15px;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
#retour p {
  color: black;
}
input {
  margin-bottom: 2%;
}
</style>