<template>
  <div id="secure">
    <Header />
    <div id="body">
      <h1>Secure Area</h1>

      <p>This is a secure area</p>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "secure",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
#secure {
  background-color: #FFFFFF;
  padding: 20px;
  margin-top: 10px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 5px;
}

#body {
  border: 1px solid #CCCCCC;
  border-radius: 15px;
  text-align: center;
}
</style>