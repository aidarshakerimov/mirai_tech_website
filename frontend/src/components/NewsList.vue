<template>
  <section class="news-list-section">
    <h2 class="section-title">{{ t('news-title') }}</h2>
    <div class="news-scroll-container">
      <div
        v-for="(news, index) in newsItems"
        :key="index"
        class="news-card"
      >
        <img :src="news.image" alt="News image" />
        <div class="news-content">
          <p class="date">{{ news.date }}</p>
          <h3>{{ news.title }}</h3>
          <p>{{ news.description }}</p>
          <a :href="news.link" class="watch-link" target="_blank" rel="noopener">{{ news.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
import { computed } from 'vue';

const langStore = useLangStore();
const t = langStore.t;

const rawNewsItems = [
  {
    date: '23.04.2025',
    titleKey: 'news-digital-title',
    descKey: 'news-digital-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/news1.png', import.meta.url).href,
    link: 'https://digitalbusiness.kz/2025-04-23/kazahstanskie-uchenie-pridumali-umnie-stelki-rasskazivaem-v-chem-ih-unikalnost/'
  },
  {
    date: '05.03.2025',
    titleKey: 'news-steppe-title',
    descKey: 'news-steppe-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/news2.png', import.meta.url).href,
    link: 'https://the-tech.kz/mirai-tech-a-startup-transforming-rehabilitation-in-medicine-and-sports/'
  },
  {
    date: '20.12.2025',
    titleKey: 'news-forbes-title',
    descKey: 'news-forbes-desc',
    linkTextKey: 'news-read-more',
    image: new URL('@/assets/news/news3.png', import.meta.url).href,
    link: 'https://seds.nu.edu.kz/news/tpost/i16i0udoc1-seds-professors-and-students-project-mir'
  },
  {
    date: '18.01.2025',
    titleKey: 'news-startup-title',
    descKey: 'news-startup-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news6.png', import.meta.url).href,
    link: 'https://www.instagram.com/reel/DFwRqiqo2fA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-umc-title',
    descKey: 'news-umc-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news5.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DI3MgimASUN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '10.05.2025',
    titleKey: 'news-feedback-title',
    descKey: 'news-feedback-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news6.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DHWOFuWgcJz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-pilot1-title',
    descKey: 'news-pilot1-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news7.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DJThi_eza_O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-pilot2-title',
    descKey: 'news-pilot2-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news8.png', import.meta.url).href,
    link: 'https://www.instagram.com/p/DJThi_eza_O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '05.03.2025',
    titleKey: 'news-motion-title',
    descKey: 'news-motion-desc',
    linkTextKey: 'news-watch',
    image: new URL('@/assets/news/news10.png', import.meta.url).href,
    link: 'https://www.instagram.com/reel/DIl0rlxA8nO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];

const newsItems = computed(() =>
  rawNewsItems.map(item => ({
    ...item,
    title: t(item.titleKey),
    description: t(item.descKey),
    linkText: t(item.linkTextKey)
  }))
);
</script>


<style scoped>
.news-scroll-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.news-card {
  flex: 0 0 auto;
  width: 300px;
  background-color: #0a1a3f;
  color: white;
  border-radius: 16px;
  overflow: hidden;
  scroll-snap-align: start;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: scale(1.05);
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 1rem;
}

.section-title {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: white;
}

.watch-link {
  color: #00ffa3;
  font-weight: bold;
  text-decoration: none;
}
</style>
