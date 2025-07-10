<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo and Hamburger + Language in Row -->
      <div class="mobile-header">
        <img src="@/assets/MiraiLogo.png" alt="Logo" class="navbar-logo" />
        <div class="mobile-controls">
          <div class="hamburger" @click="menuOpen = !menuOpen">&#9776;</div>
           <div class="lang-buttons">
            <button @click="langStore.setLanguage('kz')" :class="{ active: langStore.current === 'kz' }">KZ</button>
            <button @click="langStore.setLanguage('en')" :class="{ active: langStore.current === 'en' }">EN</button>
            <button @click="langStore.setLanguage('ru')" :class="{ active: langStore.current === 'ru' }">RU</button>
          </div>
        </div>
        <nav v-if="menuOpen" class="mobile-dropdown">
          <a href="#try">{{ t('nav-try') }}</a>
          <a href="#technology">{{ t('nav-technology') }}</a>
          <a href="#how">{{ t('nav-how') }}</a>
          <a href="#publications">{{ t('nav-publications') }}</a>
          <a href="#blog">{{ t('nav-blog') }}</a>
          <a href="#contact">{{ t('nav-contact') }}</a>
        </nav>
      </div>

      <!-- Desktop Navigation -->
      <nav class="navbar-links">
        <img src="@/assets/MiraiLogo.png" alt="Logo" class="navbar-logo-0" />
        <a href="#try">{{ t('nav-try') }}</a>
        <a href="#technology">{{ t('nav-technology') }}</a>
        <a href="#how">{{ t('nav-how') }}</a>
        <a href="#publications">{{ t('nav-publications') }}</a>
        <a href="#blog">{{ t('nav-blog') }}</a>
        <a href="#contact">{{ t('nav-contact') }}</a>
      </nav>

      <div class="navbar-options">
        <div class="lang-buttons">
          <button @click="langStore.setLanguage('kz')" :class="{ active: langStore.current === 'kz' }">KZ</button>
          <button @click="langStore.setLanguage('en')" :class="{ active: langStore.current === 'en' }">EN</button>
          <button @click="langStore.setLanguage('ru')" :class="{ active: langStore.current === 'ru' }">RU</button>
        </div>
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
import { useLangStore } from '@/stores/lang';

const menuOpen = ref(false);
const langStore = useLangStore();
const t = langStore.t;
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

.navbar-logo,
.navbar-logo-0 {
  height: 100px;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex: 1;
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
  margin-left: 3rem;
}

.navbar-options i {
  font-size: 0.8rem;
  color: white;
}
.lang-buttons {
  display: flex;
  gap: 0.2rem;
  margin-right: 1rem;
}

.lang-buttons button {
  background: transparent;
  border: 2px solid #fff;
  padding: 0.2rem 0.5rem;
  font-weight: bold;
  font-size: 0.85rem;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  transition: border-color 0.3s, color 0.3s, box-shadow 0.3s;
  box-shadow: none;
}

.lang-buttons button.active,
.lang-buttons button:hover {
  border-color: #32f1c2;
  color: #32f1c2;
  background: transparent;
  box-shadow: 0 0 8px #32f1c2;
}

.lang-buttons button.active,
.lang-buttons button:hover {
  background: #32f1c2;
  color: #0b102a;
}

.hamburger {
  font-size: 2rem;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
}

.mobile-header {
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.mobile-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

@media (max-width: 768px) {
  .navbar-links,
  .navbar-options {
    display: none;
  }

  .mobile-header {
    display: flex;
  }
}
</style>
