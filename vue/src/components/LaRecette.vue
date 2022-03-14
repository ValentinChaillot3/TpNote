<template>
  <div id="laRecette">
    <Header />
    <div id="global">
      <table>
        <tr v-for="recette in recettes" :key="recette.nom">
          <div id="recettesGlobal">
            <div id="nom">
              <td>{{ recette.nom }}</td>
            </div>
            <div id="ingredients">
              <p>ingrédients:</p>
              <td>{{ recette.ingredients }}</td>
            </div>
            <router-link
              :to="{ name: 'UpdateModRecette', params: { id: recette._id } }"
            >
              <input type="button" value="modifier" id="modif" />
            </router-link>

            <router-link
              :to="{ name: 'SuppRecette', params: { id: recette._id } }"
            >
              <input type="button" value="supprimer" id="suppr" />
            </router-link>
          </div>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Recette",
  components: {
    Header,
  },
  computed: {
    recettes() {
      return this.$store.state.recette;
    },
  },
  async mounted() {
    this.$store.dispatch("initRecette", this.$route.params.id);
  },
};
</script>

<style>
#global {
    margin-left: 42%;
}

#laRecette {
  background-color: #FFFFFF;
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

#modif {
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
}

#suppr {
  margin-left: 5%;
}
</style>
