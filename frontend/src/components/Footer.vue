<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <footer class="contact-footer" id="contact">
    <div class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-left">
          <img :src="logoUrl" alt="MIRAI TECH logo" class="footer-logo" />
          <p class="footer-desc">{{ t('footer-description') }}</p>
          <div class="social-icons">
            <a :href="social.instagram" target="_blank"><i class="mdi mdi-instagram"></i></a>
            <a :href="social.linkedin" target="_blank"><i class="mdi mdi-linkedin"></i></a>
            <a :href="social.telegram" target="_blank"><i class="fa-brands fa-telegram"></i></a>
          </div>
        </div>
        <div class="footer-right">
          <div class="contact-info">
            <h3>{{ t('footer-contacts') }}</h3>
            <p>mirai.tech.kz@gmail.com</p>
            <p>пр. Кабанбай батыра 53, Астана</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-wrapper">
          <p>
            Copyright © 2025 MIRAItech | Design by
            <a href="https://t.me/NukoCO" target="_blank">@NukoCO</a>
          </p>
          <div class="footer-links">
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLangStore } from '@/stores/lang';
const langStore = useLangStore();
const t = langStore.t;

const logoUrl = '/static/MiraiLogo.png';
const social = {
  instagram: 'https://www.instagram.com/miraitech.ai?igsh=MWd3enVybnh1NXQ2ZQ%3D%3D&utm_source=qr',
  linkedin: 'https://www.linkedin.com/company/miraitechkz/',
  telegram: 'https://t.me/miraitechkz'
};
</script>

<style scoped>
/* Add or refine styles here if needed */
</style>
