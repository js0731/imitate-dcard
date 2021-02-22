
<template>
  <div id="app">
    <Navbar v-on:childEvent="slideTarget" />
    <Banner />
    <About />
    <Skills />
    <Portfolios />
    <Contact />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Portfolios from "./components/Portfolios";
import About from "./components/About";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Contact,
    Skills,
    Portfolios,
    About,
  },
  methods: {
    slideTarget(name) {
      document
        .querySelector(name)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
};
</script>

<style scoped>
</style>