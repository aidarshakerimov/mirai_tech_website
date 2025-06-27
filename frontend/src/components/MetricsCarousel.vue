<template>
  <section class="metrics-section">
    <h2 class="section-title">Gait Analysis Metrics</h2>
    <p class="section-subtitle">
      View key data on motion, pressure, and step symmetry.
    </p>
    <div class="metrics-grid">
      <div
        v-for="(metric, index) in metrics"
        :key="index"
        class="metric-tile"
      >
        <div class="icon" v-html="metric.icon"></div>
        <div class="metric-label">{{ metric.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { label: 'Asymmetry', icon: '<i class="mdi mdi-foot-print"></i>' },
  { label: 'Step Length', icon: '<i class="mdi mdi-walk"></i>' },
  { label: 'Pressure Distribution', icon: '<i class="mdi mdi-chart-bar"></i>' },
  { label: 'Dynamics', icon: '<i class="mdi mdi-chart-line"></i>' },
  { label: 'Contact Phases', icon: '<i class="mdi mdi-shoe-print"></i>' },
  { label: 'Roll Phases', icon: '<i class="mdi mdi-walk"></i>' },
];
</script>

<style scoped>
.metrics-section {
  padding: 80px 20px;
  text-align: center;
  background: url('/images/laptop.jpeg') center/cover no-repeat;
  border-radius: 20px;
  margin: 40px 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0b102a;
}

.section-subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #333;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.metric-tile {
  background: rgba(0, 22, 60, 0.7);
  padding: 40px 20px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.metric-tile:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.icon {
  font-size: 2.5rem;
  color: #00e6e6;
  margin-bottom: 16px;
}

.metric-label {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
