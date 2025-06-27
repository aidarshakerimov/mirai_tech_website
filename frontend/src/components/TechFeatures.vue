<template>
  <section class="tech-product-section">
    <div class="container">
      <div class="content">
        <h4 class="label">INNOVATION IN EVERY STEP</h4>
        <h2 class="title">Smart Insole: Next Generation Insoles</h2>
        <p class="subtitle">
          Mirai Smart Insoles are flexible sensor insoles that measure data and analyze your gait in real time.
        </p>
        <button class="cta-button">Watch demo</button>
      </div>
      <div class="image">
        <img src="/images/product-demo.png" alt="Smart Insole Demo" />
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic required for static section.
</script>

<style scoped>
.tech-product-section {
  background: #fff;
  color: #0b102a;
  padding: 100px 20px;
}

.tech-product-section .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.content {
  max-width: 600px;
}

.label {
  font-weight: 700;
  font-size: 0.9rem;
  color: #5f6c89;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.1rem;
  color: #4c5567;
  margin-bottom: 2rem;
}

.cta-button {
  background: linear-gradient(to right, #005eff, #36d1dc);
  color: white;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.image img {
  max-width: 400px;
  width: 100%;
  height: auto;
  display: block;
}
</style>