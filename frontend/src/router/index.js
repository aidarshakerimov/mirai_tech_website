// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Adjust the path if your Home.vue is somewhere else
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

