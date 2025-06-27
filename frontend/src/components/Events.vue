<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section class="events-section" id="events">
    <div class="events-wrapper">
      <h2 class="events-title">{{ t('events-title') }}</h2>
      <div class="event-cards">
        <div class="event-card" v-for="(event, index) in events" :key="index">
          <img :src="event.image" :alt="event.alt" class="event-image" />
          <div class="event-date">{{ event.date }}</div>
          <h3 class="event-name">{{ t(event.title) }}</h3>
          <p class="event-description">{{ t(event.desc) }}</p>
          <a :href="event.link" target="_blank" class="event-link">{{ t('read-more') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { getPublications } from '@/services/api';




onMounted(async () => {
  try {
    const response = await getPublications();

    const publications = ref([]);
    publications.value = response.data;
  } catch (error) {
    console.error('Failed to load publications:', error);
  }
}); 

import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;

const events = [
  {
    image: '/static/iccar.jpg',
    alt: 'ICCAR 2025',
    date: '21-23 APRIL 2025',
    title: 'event-1-title',
    desc: 'event-1-desc',
    link: 'https://iccar.org/'
  },
  {
    image: '/static/arso.jpg',
    alt: 'ARSO 2025',
    date: '19-21 JUNE 2025',
    title: 'event-2-title',
    desc: 'event-2-desc',
    link: 'https://attend.ieee.org/arso-2025/'
  }
];
</script>

<style scoped>
/* Add responsive layout styles */
</style>
