
<template>
  <div id="app">
    <Navbar />
    <Banner />
    <About />
    <Skills />
    <Portfolios />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Portfolios from "./components/Portfolios";
import About from "./components/About";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Contact,
    Skills,
    Portfolios,
    About,
    Footer,
  },
};
</script>

<style scoped>
</style>