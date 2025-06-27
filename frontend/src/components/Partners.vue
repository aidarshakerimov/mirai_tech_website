<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="partners-section" id="partners">
    <div class="partners-intro">
      <h3 class="partners-subheading">{{ t('Partners') }}</h3>
    </div>

    <div class="partners-scroll-wrapper">
      <div class="partners-logos">
        <img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="logo.alt" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
const t = langStore.t

// Static imports of partner logos from assets
import part3 from '@/assets/partners/part3.png'
import part1 from '@/assets/partners/part1.png'
import univee from '@/assets/partners/univee.png'
import part5 from '@/assets/partners/part5.png'
import part7 from '@/assets/partners/part7.png'
import part4 from '@/assets/partners/part4.png'
import ortodok from '@/assets/partners/ortodok.png'

const logos = [
  { src: part3, alt: 'In Motion Sport Clinic' },
  { src: part1, alt: 'IDSPORT' },
  { src: univee, alt: 'Medical Center of the President Administration' },
  { src: part5, alt: 'национальный центр травмотологиии' },
  { src: part7, alt: 'Городская многопрофильная больница №2' },
  { src: part4, alt: 'Green Clinic' },
  { src: ortodok, alt: 'ORTODok' },
]
</script>


<style scoped>
.partners-section {
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #e9f0fa, #ffffff);
  text-align: center;
}

.partners-subheading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #222;
}

.partners-scroll-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 1rem;
}

.partners-logos {
  display: inline-flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.partners-logos img {
  height: 60px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partners-logos img:hover {
  transform: scale(1.05);
}
</style>
