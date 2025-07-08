<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="contact-footer">
    <div class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-left">
          <img src="@/assets/MiraiLogo.png" alt="MIRAI TECH logo" class="footer-logo" />
          <p class="footer-desc">{{ t('footer-description') }}</p>
          <div class="social-icons">
            <a href="https://www.instagram.com/miraitech.ai?igsh=MWd3enVybnh1NXQ2ZQ%3D%3D&utm_source=qr" target="_blank"><i class="mdi mdi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/miraitechkz/" target="_blank"><i class="mdi mdi-linkedin"></i></a>
            <a href="https://t.me/miraitechkz" target="_blank"><i class="fa-brands fa-telegram"></i></a>
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
          <p>Copyright © 2025 MIRAItech | Design by <a href="https://t.me/shakerman" target="_blank">@Shakerman</a></p>
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
</script>

<style scoped>
.contact-footer {
  background: linear-gradient(145deg, #0c1127 0%, #172248 100%);
  color: white;
  padding: 3rem 1rem 1rem;
  font-family: 'Inter', sans-serif;
}

.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 2rem;
}

.footer-logo {
  max-height: 60px;
  margin-bottom: 1rem;
}

.footer-desc {
  max-width: 350px;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
}

.contact-info {
  text-align: right;
  font-size: 1rem;
}

.contact-info h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

.footer-bottom-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 0.5rem;
}

.footer-links a {
  color: white;
  text-decoration: underline;
}
</style>
