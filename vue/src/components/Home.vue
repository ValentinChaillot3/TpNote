<template>
  <div id="Body">
    <div id="first">
      <img alt="Vue logo" src="../assets/logo.png" width="25%" />
      <HelloWorld msg="Hello Vue " />
    </div>

    <div id="second">
      <img alt="Vue logo" src="../assets/logo.png" width="25%" />
      <HelloWorld msg="Hello Vue " />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./HelloWord";

export default {
  name: "Body",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#global {
  display: grid;
  position: relative;
  top: 40%;
  margin-top: 4%;
  text-align: center;
}

#first {
  grid-column: 1;
  grid-row: 1;
}

#second {
  grid-column: 2;
  grid-row: 1;
}

#Body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   display: grid;
  position: relative;
  top: 40%;
  margin-top: 4%;
}
</style>
