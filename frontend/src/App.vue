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
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #0a0f2c; /* Dark background for hero section */
  color: white; /* Default white text for hero */
}

section:not(.hero) {
  background-color: #ffffff; /* White background for other sections */
  color: #0a0f2c; /* Dark blue text */
}
</style>
