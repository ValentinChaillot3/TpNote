import Vue from "vue";
import App from "./App.vue";
import router from "./router/Router.js";
import Vuex from "vuex";
import axios from "axios";

import { recettes } from "./helpers/apiHelper";
import { recette } from "./helpers/apiHelper";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recettes: [],
    recette: []
  },
  mutations: {
    updateRecettes(state, recettes) {
      state.recettes = recettes;
    },
    updateRecette(state, recette) {
      state.recette = recette;
    },
    AddRecette(state, Addrecette) {
      state.recette.unshift(Addrecette);
    },
    SuppRecette(state, id) {
      state.recette = state.recettes.filter((recette) => recette.id !== id);
    },
    UpdateModRecette(state, UpdateModRecette) {
      const index = state.recette.findIndex(
        (recette) => recette.id === UpdateModRecette.id
      );
      if (index !== -1) {
        state.recette.splice(index, 1, UpdateModRecette);
      }
    }
  },
  actions: {
    initRecettes({ commit }) {
      recettes()
        .then((response) => {
          commit("updateRecettes", response.data.recettes);
        })
        .catch((error) => {
          console.log("server probably not up");
        });
    },
    initRecette({ commit }, id) {
      recette(id)
        .then((response) => {
          commit("updateRecette", response.data);
        })
        .catch((error) => {
          console.log("server probably not up");
        });
    },
    async DelRecette({ commit }, id) {
      await axios.delete(`https://tpnotejs.herokuapp.com/recettes/${id}`);

      commit("SuppRecette", id);
    },
    async UpdateModRecette({ commit }, id, recette) {
      const response = await axios.put(
        `https://tpnotejs.herokuapp.com/recettes/${id}`,
        recette
      );

      commit("UpdateModRecette", response.data);
    },
    async AddRecette({ commit }, nom, ingredients) {
      const response = await axios.post(
        `https://tpnotejs.herokuapp.com/recettes`,
        { nom: nom, ingredients: ingredients }
      );

      commit("AddRecette", response.data);
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
