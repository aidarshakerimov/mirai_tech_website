<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="partners-section" id="partners">
    <div class="partners-intro">
      <h3 class="partners-subheading">{{ t('partners-title') }}</h3>
    </div>

    <div class="partners-scroll-wrapper">
      <div class="partners-logos">
        <img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="t(logo.altKey)" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()
const t = langStore.t

import part3 from '@/assets/partners/part3.png'
import part1 from '@/assets/partners/part1.png'
import univee from '@/assets/partners/univee.png'
import part5 from '@/assets/partners/part5.png'
import part7 from '@/assets/partners/part7.png'
import part4 from '@/assets/partners/part4.png'
import ortodok from '@/assets/partners/ortodok.png'

const logos = [
  { src: part3, altKey: 'partner-inmotion' },
  { src: part1, altKey: 'partner-idsport' },
  { src: univee, altKey: 'partner-medcenter' },
  { src: part5, altKey: 'partner-trauma' },
  { src: part7, altKey: 'partner-hospital2' },
  { src: part4, altKey: 'partner-greenclinic' },
  { src: ortodok, altKey: 'partner-ortodok' }
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
  gap: 3.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.partners-logos img {
  height: 80px;
  max-width: 180px;
  object-fit: contain;
  filter: brightness(0) grayscale(1) contrast(0.2);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.partners-logos img:hover {
  transform: scale(1.1);
  filter: brightness(0.3) grayscale(0.5) contrast(0.8);
}
</style>
