import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLangStore = defineStore('lang', () => {
  const current = ref('en');

  const translations = {
    en: {
      'nav-about': 'About',
      'nav-problem': 'Problem',
      'nav-solution': 'Solution',
      'nav-tech': 'Technology',
      'nav-how': 'How it Works',
      'nav-metrics': 'Metrics',
      'nav-service': 'Applications',
      'nav-publications': 'Publications',
      'nav-blog': 'Blog',
      'nav-news': 'News',
      'nav-testimonials': 'Testimonials',
      'nav-events': 'Events',
      'nav-contact': 'Contact',
      'footer-description': 'Smart insole for diagnosis, rehabilitation, and sports training.',
      'footer-contacts': 'Contacts',
      'hero-title': 'Revolutionizing Rehabilitation & Diagnosis with Smart Insoles',
      'hero-desc': 'Our AI-powered insole helps diagnose and monitor gait anomalies like flatfoot, Parkinson’s, and more.',
      'cta-button': 'Pre-order Now',
      'problems-title': 'Real-World Problems We Solve',
      'problems-subtitle': 'Early detection of gait-related conditions is vital. Our solution helps.',
      'tech-feature-1-title': 'AI Integration',
      'tech-feature-1-text': 'Uses CNN and RNN for real-time gait analysis.',
      'tech-feature-2-title': 'Wireless Transmission',
      'tech-feature-2-text': 'Bluetooth-enabled data flow to mobile and cloud.',
      'tech-feature-3-title': 'Motion Tracking',
      'tech-feature-3-text': 'Pressure and contact phase monitoring.',
      'tech-feature-4-title': 'Cloud Analytics',
      'tech-feature-4-text': 'Centralized analysis and visualization.',
      'tech-feature-5-title': 'Neural Feedback',
      'tech-feature-5-text': 'Adaptive learning for accurate diagnostics.',
      'tech-feature-6-title': 'Patient Monitoring',
      'tech-feature-6-text': 'Realtime updates for physicians.',
      'how-title': 'How It Works',
      'how-subtitle': 'From step sensing to AI-driven feedback',
      'how-step-1-title': 'Step Detection',
      'how-step-1-text': 'TENG sensors capture pressure and motion.',
      'how-step-2-title': 'Wireless Sync',
      'how-step-2-text': 'Sensor data transmitted via Bluetooth.',
      'how-step-3-title': 'Gait Analysis',
      'how-step-3-text': 'AI models extract patterns and classify.',
      'how-step-4-title': 'Feedback & Dashboard',
      'how-step-4-text': 'Results visualized in app & platform.',
      'metrics-title': 'Measured Gait Metrics',
      'metrics-subtitle': 'Smart data for smarter health',
      'metric-1': 'Asymmetry Index',
      'metric-2': 'Step Length',
      'metric-3': 'Load Distribution',
      'metric-4': 'Gait Dynamics',
      'metric-5': 'Contact Phases',
      'metric-6': 'Heel-to-Toe Roll',
      'video-title': 'Demonstration Videos',
      'video-subtitle': 'See our product in action',
      'service-title': 'Application Scenarios',
      'service-subtitle': 'Designed for performance and recovery',
      'card-sport-title': 'Sports Training',
      'card-sport-text': 'Improve technique and prevent injuries.',
      'card-rehab-title': 'Rehabilitation',
      'card-rehab-text': 'Monitor recovery and track progress.',
      'publications-title': 'Our Scientific Contributions',
      'read-more': 'Read More',
      'news-title': 'Media Coverage',
      'testimonial-1-name': 'Sergei D.',
      'testimonial-1-role': 'Athlete, Olympic Reserve',
      'testimonial-1-text': 'This insole changed my approach to training. I can prevent injuries early.',
      'testimonial-2-name': 'Orys K.',
      'testimonial-2-role': 'Physiotherapist',
      'testimonial-2-text': 'Finally a solution that offers insights I can trust in real time.',
      'testimonial-3-name': 'Aigerim T.',
      'testimonial-3-role': 'Mother of a child with ASD',
      'testimonial-3-text': 'Helps my child walk better and improve daily.',
      'testimonial-4-name': 'Bolat S.',
      'testimonial-4-role': 'Clinic Director',
      'testimonial-4-text': 'We use this in all rehabilitation sessions now.',
      'events-title': 'Recent Conferences'
    },
    // Extend for 'kz' and 'ru' if needed
  };

  function setLanguage(lang) {
    current.value = lang;
  }

  function t(key) {
    return translations[current.value][key] || key;
  }

  return { current, setLanguage, t };
});
