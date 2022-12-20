<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #222831;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
