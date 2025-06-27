<template>
  <section class="how-it-works">
    <div class="container">
      <h2 class="section-title">How does MIRAI Smart Insole work?</h2>
      <p class="section-subtitle">Only 4 steps — and you get a digital gait profile</p>

      <div class="steps-grid">
        <div class="step-card" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-icon">
            <i :class="step.icon"></i>
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: 'mdi mdi-foot-print',
    title: 'Insert the insoles',
    text: 'Choose the right size and place it in your shoe.'
  },
  {
    icon: 'mdi mdi-bluetooth',
    title: 'Connect via Bluetooth',
    text: 'Open the app and follow the on-screen instructions.'
  },
  {
    icon: 'mdi mdi-walk',
    title: 'Take 10 steps',
    text: 'The insoles will record your data as you walk.'
  },
  {
    icon: 'mdi mdi-file-document-outline',
    title: 'Get your report',
    text: 'You can save, print, or email the results.'
  }
]
</script>

<style scoped>
.how-it-works {
  background: linear-gradient(to bottom right, #0b102a, #131c3c);
  color: white;
  padding: 80px 20px;
  text-align: center;
  border-radius: 20px;
  margin: 40px 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
}

.section-subtitle {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #c7c7d5;
}

.steps-grid {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.step-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 16px;
  width: 220px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
}

.step-number {
  width: 36px;
  height: 36px;
  background: #36d1dc;
  border-radius: 50%;
  color: #0b102a;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.5);
}

.step-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.step-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-card p {
  font-size: 0.95rem;
  color: #d4d4d4;
}
</style>
