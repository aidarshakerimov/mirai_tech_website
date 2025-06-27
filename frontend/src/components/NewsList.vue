// In NewsList.vue or equivalent component
<template>
  <section class="news-list-section">
    <h2 class="section-title">News</h2>
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
          <p>{{ news.text }}</p>
          <a :href="news.link" class="watch-link">Watch →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const newsItems = [
   {
    date: '23.04.2025',
    title: 'Digital Business',
    description: 'Engineers from Nazarbayev University founded MIRAI TECH after studying in Japan.',
    linkText: 'Read more →',
    image: new URL('@/assets/news/news1.jpg', import.meta.url).href,
    link: 'https://digitalbusiness.kz/mirai-tech-feature'
  },
  {
    date: '05.03.2025',
    title: 'The Steppe',
    description: 'MIRAI TECH — a startup transforming rehabilitation in medicine and sports.',
    linkText: 'Read more →',
    image: new URL('@/assets/news/news2.jpg', import.meta.url).href,
    link: 'https://steppe.media/news/mirai-tech-health-startup'
  },
  {
    date: '20.12.2025',
    title: 'Forbes Kazakhstan',
    description: 'MIRAI TECH project by SEDS professors and students.',
    linkText: 'Read more →',
    image: new URL('@/assets/news/news3.jpeg', import.meta.url).href,
    link: 'https://forbes.kz/tech/startup/mirai-tech-ai-insole/'
  },
  {
    date: '18.01.2025',
    title: 'Startup Voice',
    description: 'Watch a video showing gait analysis results.',
    linkText: 'Watch →',
    image: new URL('@/assets/news/news6.png', import.meta.url).href,
    link: 'https://www.youtube.com/watch?v=miraitech-video'
  },
   {
    date: '05.03.2025',
    source: 'TechCrunch',
    title: 'VISIT TO University Medical Center',
    summary: 'Mirai Tech team had the privilege of visiting the University Medical Center, specifically the rehabilitation department.',
    image: require('@/assets/news/news5.png'),
    link: 'https://www.instagram.com/mirai_tech_official/'
  },
  {
    date: '10.05.2025',
    source: 'MedTech Review',
    title: 'MedTech Review',
    summary: 'Feedback and analysis from MIRAI TECH on Instagram.',
    image: require('@/assets/news/news6.png'),
    link: 'https://www.instagram.com/mirai_tech_official/'
  },
  {
    date: '05.03.2025',
    source: 'TechCrunch',
    title: 'НАЧАЛО ПИЛОТА В УДП БОЛЬНИЦЕ: ШАГ К ВНЕДРЕНИЮ КАЗАХСТАНСКИХ ИННОВАЦИЙ В',
    summary: 'Rehabilitation innovations through insoles.',
    image: require('@/assets/news/news7.png'),
    link: 'https://www.instagram.com/mirai_tech_official/'
  },
  {
    date: '05.03.2025',
    source: 'TechCrunch',
    title: 'MIRAI TECH LAUNCHES PILOT AT CITY HOSPITAL NO. 2: INNOVATION IN POST-STROKE REHABILITATION',
    summary: 'AI and sensors by MIRAI TECH — a glimpse of the future.',
    image: require('@/assets/news/news8.png'),
    link: 'https://www.instagram.com/mirai_tech_official/'
  },
  {
    date: '05.03.2025',
    title: 'TechCrunch',
    description: 'Results in motion: MIRAI TECH in action.',
    image: require('@/assets/news/news10.png'), // Or appropriate import
    linkText: 'Watch',
    linkUrl: 'https://example.com/news/mirai-results-in-motion' // Update with real link
  },
];
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
