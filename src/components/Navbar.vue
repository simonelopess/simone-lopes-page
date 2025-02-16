<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'

import { nextTick } from 'vue'
import SocialIcons from './Social-Icons.vue'

const scrollToSection = (section) => {
  let marginTop = 0

  nextTick(() => {
    const element = document.querySelector(section)

    element.id !== 'intro' ? (marginTop = 300) : (marginTop = 180)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - marginTop,
        behavior: 'smooth', // Rolagem suave
      })
    }
  })
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="#intro" @click.prevent="scrollToSection('#intro')">@simonelopess</RouterLink>
      <RouterLink to="#experience" @click.prevent="scrollToSection('#experience')"
        >experience</RouterLink
      >
      <RouterLink to="#education" @click.prevent="scrollToSection('#education')"
        >education</RouterLink
      >
      <SocialIcons />
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

.social-networks {
  display: flex;
  gap: 16px;
}
</style>
