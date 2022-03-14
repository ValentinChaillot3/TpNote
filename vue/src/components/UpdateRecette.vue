<template>
  <div id="addRecette">
    <Header />
    <div id="global">
      <fieldset>
        <form @submit="onSubmit" method="post">
          <input type="text" name="nom" placeholder= />
          <br />
          <input type="text" name="ingredient" placeholder= />
          <br />
          <button type="submit" @click="UpdateModRecette()">Modifier</button>
          <br />
        </form>
      </fieldset>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { mapActions } from "vuex";
export default {
  name: "UpdateModRecette",
  components: {
    Header,
  },
  computed: {
    UpdateModRecette() {
      return this.$store.state.recette;
    },
  },
  async mounted() {
    this.$store.dispatch("initRecette", this.$route.params.id);
  },
  methods: {
    ...mapActions(["UpdateModRecette"]),
    onClick(recette) {
      const updRecette = {
        nom: recette.nom,
        ingredient: recette.ingredient,
      };
      this.UpdateModRecette(this.$store.state.recette.id, updRecette);
    },
  },
};
</script>

<style>
#addRecette {
  background-color: #FFFFFF;
  padding: 20px;
  margin-top: 10px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 5px;
}

input {
  margin-bottom: 2%;
}

fieldset {
  border-radius: 10px;
  margin-right: 30%;
  margin-bottom: 2%;
}
</style>
