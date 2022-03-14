import Vue from "vue";
import Router from "vue-router";
import LoginComponent from "@/components/login";
import SecureComponent from "@/components/secure";
import registerComponent from "@/components/register";
import recettes from "@/components/Recette";
import recette from "@/components/LaRecette";
import AddRecette from "@/components/AddRecette";
import SuppRecette from "@/components/SuppRecette";
import UpdateModRecette from "@/components/UpdateRecette";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "home"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    },
    {
      path: "/register",
      name: "register",
      component: registerComponent
    },
    {
      name: "home",
      component: SecureComponent,
      path: "/"
    },
    {
      path: "/recettes",
      component: recettes,
      name: "recettes"
    },
    {
      path: "/recette/:id",
      component: recette,
      name: "recette"
    },
    {
      path: "/Addrecette",
      component: AddRecette,
      name: "AddRecette"
    },
    {
      path: "/SuppRecette",
      component: SuppRecette,
      name: "SuppRecette"
    },
    {
      path: "/UpdateModRecette",
      component: UpdateModRecette,
      name: "UpdateModRecette"
    }
  ]
});
