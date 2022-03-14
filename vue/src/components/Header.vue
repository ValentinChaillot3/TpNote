<template>
  <div id="head">
    <h1>La Recette</h1>
    <!-- <div id="logout">
      <p>
        <router-link to="/login">logout</router-link>
      </p>
    </div> -->
    <p>
      <router-link to="/">Home</router-link>
      <span>|</span>
      <router-link to="/recettes">Recettes</router-link>
    </p>
  </div>
</template>

<style>
#head {
  text-align: center;
}
#logout p {
  text-align: left;
  font-size: 20px;
}
</style>