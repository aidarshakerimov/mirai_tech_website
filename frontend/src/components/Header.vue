<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Hamburger Menu Icon -->
      <div class="menu-toggle" @mouseenter="menuOpen = true" @mouseleave="menuOpen = false">
        <img src="@/assets/MiraiLogo.png" alt="Logo" class="navbar-logo" />
        <div class="hamburger">&#9776;</div>
        <nav v-if="menuOpen" class="mobile-dropdown">
          <a href="#try">Try For Free</a>
          <a href="#technology">Product & Services</a>
          <a href="#how">How It Works?</a>
          <a href="#publications">Publications</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <!-- Desktop Navigation -->
      <nav class="navbar-links">
        <a href="#try">Try For Free</a>
        <a href="#technology">Product & Services</a>
        <a href="#how">How It Works?</a>
        <a href="#publications">Publications</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="navbar-options">
        <span>KZ | EN | RU</span>
        <a href="https://instagram.com" target="_blank">
          <i class="mdi mdi-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank">
          <i class="mdi mdi-linkedin"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(120deg, #0b102a, #131c3c);
  padding: 1rem 2rem;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: auto;
}

.navbar-logo {
  height: 50px;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  gap: 1rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.navbar-links a:hover {
  color: #32f1c2;
  text-shadow: 0 0 6px #32f1c2, 0 0 12px #32f1c2;
}

.navbar-options {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
}

.navbar-options i {
  font-size: 1.2rem;
  color: white;
}

.menu-toggle {
  display: none;
  align-items: center;
  position: relative;
}

.hamburger {
  font-size: 2rem;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
}

.mobile-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #0b102a;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 99999;
}

.mobile-dropdown a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.mobile-dropdown a:hover {
  color: #32f1c2;
  text-shadow: 0 0 6px #32f1c2;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
}
</style>
