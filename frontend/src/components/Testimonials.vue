<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="testimonials-section" id="testimonials">
    <div class="testimonial-scroll-wrapper">
      <div class="testimonial-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <div class="testimonial-header">
            <img class="testimonial-avatar" :src="testimonial.avatar" :alt="testimonial.name" />
            <div class="testimonial-info">
              <p class="testimonial-name">{{ testimonial.name }}</p>
              <p class="testimonial-role">{{ testimonial.role }}</p>
            </div>
          </div>
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          name: 'ROMAN IVANOV',
          role: 'Asian Games Gold Medalist in Freestyle Skiing',
          avatar: require('@/assets/images/sergei_olimp.png'),
          text: 'Clearly saw the difference in leg load, understood what to work on after doctor’s interpretation.'
        },
        {
          name: 'TAISIYA DURACHENKO',
          role: 'Sports Medicine and Rehab Doctor, CEO',
          avatar: require('@/assets/images/orys.png'),
          text: "Now we can not only rely on the patient's words but also show objective progress data."
        },
        {
          name: 'MOLDIR',
          role: 'Office worker',
          avatar: require('@/assets/images/kazakh.png'),
          text: 'I took the insoles for fun. Turned out I had a leg imbalance, confirmed with the report! Now I feel better.'
        },
        {
          name: 'BOLAT',
          role: 'Tech Professional',
          avatar: require('@/assets/images/Bolat.png'),
          text: 'Excellent device. Very useful for understanding gait and pressure distribution.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials-section {
  padding: 2rem;
  overflow-x: auto;
}

.testimonial-scroll-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 1rem;
}

.testimonial-grid {
  display: flex;
  gap: 1.5rem;
}

.testimonial-card {
  background-color: #0d1b3e;
  color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  min-width: 300px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.testimonial-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 0.75rem;
  object-fit: cover;
}

.testimonial-info {
  display: flex;
  flex-direction: column;
}

.testimonial-name {
  font-weight: bold;
  color: #20e0c2;
}

.testimonial-role {
  font-size: 0.85rem;
  color: #c0c0c0;
}

.testimonial-stars {
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.testimonial-text {
  font-style: italic;
  line-height: 1.4;
}
</style>
