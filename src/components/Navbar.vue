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
      <div>
        <RouterLink to="#intro" @click.prevent="scrollToSection('#intro')"
          >@simonelopess</RouterLink
        >
        <RouterLink to="#experience" @click.prevent="scrollToSection('#experience')"
          >experience</RouterLink
        >
        <RouterLink to="#education" @click.prevent="scrollToSection('#education')"
          >education</RouterLink
        >
        <div class="translate">
          <v-button class="btn" @click="$i18n.locale = `pt`">PT</v-button>
          <v-button class="btn" @click="$i18n.locale = `en`">EN</v-button>
        </div>
      </div>
      <SocialIcons />
    </nav>
  </header>
</template>

<style scoped>
header {
  background: var(--bg-nav);
  color: #211f23;
  max-width: fit-content;
  padding: 16px 24px;
  border-radius: 100px;
  backdrop-filter: blur(7px);

  position: fixed;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}

nav {
  display: flex;
  gap: 72px;
  align-items: center;
}

nav div {
  display: flex;
  gap: 42px;
}

nav a {
  color: var(--color-purple-300);
  text-decoration: none;
}

nav a:hover {
  filter: brightness(0.8);
}

.social-networks {
  display: flex;
  gap: 16px;
}

.translate {
  display: flex;
  gap: 8px;
}

.btn {
  background: var(--color-purple-300);
  color: var(--color-white);
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.5rem;
  font-weight: 700;
}
@media (max-width: 1023px) {
  header {
    padding: 20px 27px;
    padding-bottom: 10px;
  }

  header nav {
    display: flex;
    align-items: center;
    gap: 10px;

    flex-wrap: wrap;
    justify-content: center;
  }

  header div {
    gap: 20px;
  }
}
</style>
