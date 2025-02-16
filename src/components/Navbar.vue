<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
import emailIcon from '@/assets/icons/email.svg'
import githubIcon from '@/assets/icons/github.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">@simonelopes</RouterLink>
      <RouterLink to="/education">education</RouterLink>
      <RouterLink to="/experience">experience</RouterLink>
      <div class="social-icons">
        <img :src="githubIcon" alt="github icon" />
        <img :src="linkedinIcon" alt="linkedin icon" />
        <img :src="emailIcon" alt="email icon" />
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: var(--bg-nav);
  color: #211f23;
  max-width: fit-content;
  padding: 24px 52px;
  border-radius: 100px;

  position: fixed;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}

nav {
  display: flex;
  gap: 42px;
}

nav a {
  color: var(--color-purple-300);
  text-decoration: none;
}

.social-icons {
  display: flex;
  gap: 16px;
}
</style>
