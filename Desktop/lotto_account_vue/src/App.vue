<template>
  <Nav></Nav>
  <Carousel />
</template>

<script>
import Nav from "./components/Nav.vue";
import Carousel from "./components/Carousel.vue";
export default {
  name: "App",
  components: {
    Nav,
    Carousel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
