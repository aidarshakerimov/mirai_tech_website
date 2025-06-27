<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">What prevents patients from recovering faster?</h2>
      <p class="section-subtitle">
        These problems are encountered daily by doctors and trainers. We are building a tool that simplifies diagnostics and strengthens therapy results.
      </p>

      <div class="card-grid">
        <div class="card" v-for="(item, index) in problems" :key="index">
          <img :src="item.image" :alt="item.title" />
          <div class="card-caption">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const problems = [
  {
    title: 'Rehabilitation progressing slowly?',
    image: '/images/problem1.jpg',
  },
  {
    title: 'Limp holding you back from staying active?',
    image: '/images/problem2.jpg',
  },
  {
    title: 'Injury of the foot or ankle?',
    image: '/images/problem3.jpg',
  },
];
</script>

<style scoped>
.section {
  background: #f7f9fc;
  color: #0b102a;
  padding: 80px 20px;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
}
.section-subtitle {
  margin-top: 0.75rem;
  font-size: 1.1rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.card-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;
}
.card {
  width: 300px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background: white;
}
.card img {
  width: 100%;
  display: block;
  height: 200px;
  object-fit: cover;
}
.card-caption {
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
</style>
