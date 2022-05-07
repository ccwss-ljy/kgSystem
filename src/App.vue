<template>
  <div id="app">
    <MyLogin/>
  </div>
</template>

<script>
import MyLogin from "./components/MyLogin.vue";
export default {
  name: "App",
  components: {
    MyLogin
},
};
</script>

<style>
#app {
  height: 100%;
}
</style>
