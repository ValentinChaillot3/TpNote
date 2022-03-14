<template>
  <div id="recette">
    <Header />
    <div id="btnAjouter">
      <router-link :to="{ name: 'AddRecette' }">
        <input type="button" value="ajouter"
      /></router-link>
    </div>
    <div id="global">
      <table>
        <tr v-for="recette in recettes" :key="recette.nom">
          <div id="recettesGlobal">
            <div id="nom">
              <router-link
                :to="{ name: 'recette', params: { id: recette._id } }"
              >
                <td>{{ recette.nom }}</td></router-link
              >
            </div>
            <div id="ingredients">
              <p>ingrédients:</p>
              <td>{{ recette.ingredients }}</td>
            </div>
          </div>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Recettes",
  components: {
    Header,
  },
  computed: {
    recettes() {
      return this.$store.state.recettes;
    },
  },
  async mounted() {
    this.$store.dispatch("initRecettes");
  },
};
</script>

<style>
#global {
  margin-left: 30%;
}

#recettesGlobal {
  border: 1px solid #CCCCCC;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 5%;
}

#recette {
  background-color: #E2E2E2;
  padding: 20px;
  margin-top: 10px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 5px;
}

#nom {
  text-align: center;
  margin-bottom: 10%;
  font-weight: bold;
}

#nom td {
  font-size: 30px;
  color: rgb(100, 100, 100);
}

#ingredients p {
  text-decoration: underline;
}

#ingredients td {
  margin-top: -5px;
  font-size: 15px;
}

#btnAjouter input {
  margin-left: 45%;
  margin-bottom: 5%;
  width: 10%;
  background-color: white;
}
</style>
