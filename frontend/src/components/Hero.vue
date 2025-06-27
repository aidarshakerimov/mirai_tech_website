<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">Health starts <em>with the right gait</em></h1>
      <p class="hero-subtitle">
        Mirai Smart Insole analyzes pressure and gait in real time to help detect deviations and restore movement balance.
      </p>
      <button class="hero-button">Try for free</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(120deg, #0b102a, #131c3c);
  color: white;
  padding: 100px 20px;
  text-align: left;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
}
.hero-subtitle {
  margin-top: 1rem;
  font-size: 1.25rem;
  max-width: 600px;
  color: #d4d4d4;
}
.hero-button {
  margin-top: 2rem;
  background: linear-gradient(to right, #005eff, #36d1dc);
  color: white;
  border: none;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
}
</style>
