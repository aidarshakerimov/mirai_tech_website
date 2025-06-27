<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="navbar">
    <div class="navbar-left">
      <img src="/logo.svg" alt="Mirai Tech Logo" class="logo" />
      <nav class="nav-links">
        <a href="#">About Us</a>
        <a href="#">Technology</a>
        <a href="#">Publications</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
    </div>
    <div class="navbar-right">
      <div class="lang-switch">
        <span>KZ</span> | <span class="active">EN</span> | <span>RU</span>
      </div>
      <div class="social-icons">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: #0e1224;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
}

.logo {
  height: 42px;
  margin-right: 32px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.nav-links a {
  margin: 0 14px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
}

.nav-links a:hover {
  color: #57b3ff;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.lang-switch {
  margin-right: 20px;
  color: #ffffff;
  font-size: 14px;
}

.lang-switch span {
  margin: 0 4px;
  cursor: pointer;
}

.lang-switch .active {
  font-weight: bold;
  text-decoration: underline;
}

.social-icons i {
  font-size: 18px;
  margin-left: 12px;
  cursor: pointer;
}
</style>
