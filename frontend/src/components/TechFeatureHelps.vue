<template>
  <section class="tech-helps-section">
    <div class="container">
      <h2 class="section-title">How Mirai Insole Helps</h2>
      <div class="feature-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <svg-icon type="mdi" :path="feature.path" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-text">{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiBrain,
  mdiCellphoneLink,
  mdiRunFast,
  mdiCloudUploadOutline,
  mdiHomeCity,
  mdiAccountCircleOutline
} from '@mdi/js';

export default {
  name: "TechHelpsSection",
  components: {
    SvgIcon
  },
  data() {
    return {
      features: [
        {
          path: mdiBrain,
          title: 'AI-powered analysis',
          text: 'Automatic gait analysis based on machine learning algorithms.'
        },
        {
          path: mdiCellphoneLink,
          title: 'Diagnosis in 5 minutes',
          text: 'Doctors receive objective information during the first appointment — no need for lengthy observations or subjective tests.'
        },
        {
          path: mdiRunFast,
          title: 'Objective progress tracking',
          text: 'Digital indicators that can be compared from session to session.'
        },
        {
          path: mdiCloudUploadOutline,
          title: 'Automatic reporting',
          text: 'Reduces documentation. Just sign and upload or save the report.'
        },
        {
          path: mdiHomeCity,
          title: 'Continuous monitoring outside clinic',
          text: 'Monitor gait in real-world environments — at home, gym, or outdoors.'
        },
        {
          path: mdiAccountCircleOutline,
          title: 'Simple interface for doctors and patients',
          text: 'No training required. Works seamlessly on desktop or phone.'
        }
      ]
    };
  }
};
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
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.animated-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: #14c9cb;
  transition: transform 0.4s ease;
}

.feature-card:hover .animated-icon {
  transform: rotateY(15deg) scale(1.2);
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

