<template>
  <section class="tech-helps-section">
    <div class="container">
      <h2 class="section-title">How Mirai Insole Helps</h2>
      <div class="feature-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-text">{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'mdi mdi-brain',
    title: 'AI-powered analysis',
    text: 'Automatic gait analysis based on machine learning algorithms.'
  },
  {
    icon: 'mdi mdi-cellphone-link',
    title: 'Diagnosis in 5 minutes',
    text: 'Doctors receive objective information during the first appointment — no need for lengthy observations or subjective tests.'
  },
  {
    icon: 'mdi mdi-run-fast',
    title: 'Objective progress tracking',
    text: 'Digital indicators that can be compared from session to session.'
  },
  {
    icon: 'mdi mdi-cloud-upload-outline',
    title: 'Automatic reporting',
    text: 'Reduces documentation. Just sign and upload or save the report.'
  },
  {
    icon: 'mdi mdi-home-city',
    title: 'Continuous monitoring outside clinic',
    text: 'Monitor gait in real-world environments — at home, gym, or outdoors.'
  },
  {
    icon: 'mdi mdi-account-circle-outline',
    title: 'Simple interface for doctors and patients',
    text: 'No training required. Works seamlessly on desktop or phone.'
  }
];
</script>

<style scoped>
.tech-helps-section {
  padding: 80px 20px;
  background: #f5f8fa;
  color: #0b102a;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
}

.feature-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.feature-card {
  background: white;
  padding: 24px;
  width: 300px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.feature-icon i {
  font-size: 2rem;
  color: #14c9cb;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-text {
  font-size: 0.95rem;
  color: #444;
}
</style>
