<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Add to your main global CSS file or layout wrapper */
body {
  margin: 0;
  padding: 0;
  background: #0b102a; /* or your desired full background */
  overflow-x: hidden; /* prevents horizontal scroll */
}

/* Optional: override container or layout padding */
.container,
.tech-container,
.footer-wrapper,
.preorder-container,
.navbar-container {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Remove extra section padding if present */
section {
  padding-left: 0;
  padding-right: 0;
}

/* Optional fix for dark side gutters */
html, body {
  width: 100%;
  scroll-behavior: smooth;
}


</style>
