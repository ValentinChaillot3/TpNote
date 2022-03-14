<template>
  <div id="addRecette">
    <Header />
    <div id="global">
      <fieldset>
        <form @submit="onSubmit" method="post">
          <input type="text" name="nom" placeholder="Nom de la recette" />
          <br />
          <input type="text" name="ingredient" placeholder="Ingrédients" />
          <br />
          <button type="submit">Créer</button>
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
  name: "AddRecette",
  components: {
    Header,
  },
  computed: {
    Addrecettes() {
      return this.$store.state.recette;
    },
  },
  async mounted() {
    this.$store.dispatch("AddRecette");
  },
  methods: {
    ...mapActions(["AddRecette"]),
    onSubmit(event) {
      event.preventDefault();
      this.AddRecette(this.nom, this.ingrédient);
      this.nom = "";
      this.ingrédient = "";
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
