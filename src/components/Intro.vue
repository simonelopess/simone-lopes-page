<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="intro">
    <div class="intro-text">
      <h1>Hi, I’m Simone</h1>
      <p>
        During these <strong>6 years</strong> as <strong>Front-End Software Engineer</strong>. My
        role has extended beyond coding to effective communication with various departments, to
        define new features and spearheading the development of new apps.
      </p>
      <button class="intro-button">Download CV</button>
    </div>
    <div class="intro-image">
      <Image width="407" height="357" />
    </div>
    <div class="intro-background">
      <img src="/src/assets/background.png" alt="background" />
    </div>
  </div>
</template>

<script setup>
import Image from '@/components/Image.vue'
</script>

<style scoped>
.intro {
  display: flex;
  justify-content: space-around;
}

.intro-text {
  max-width: 662px;
}

.intro-text h1 {
  font-size: 64px;
  margin-bottom: 24px;
  font-weight: 400;
}

.intro-text p {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: var(--color-gray-300);
}

.intro-button {
  margin-top: 24px;
  padding: 12px 40px;
  color: var(--color-gray-900);
  border-radius: 100px;
}

.intro-background {
  position: absolute;
  top: 0px;
  left: 20;
  z-index: -1;
}
</style>
