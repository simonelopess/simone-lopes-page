<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="intro">
    <div class="intro-text">
      <h1 class="intro-anime-typewriter line-1">Hi, I’m Simone</h1>
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
  </div>
  <Title title="Career background" preTitle="4 years of" />
</template>

<script setup>
import Image from '@/components/Image.vue'
import Title from '@/components/Title.vue'
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
  cursor: pointer;
}

.intro-button:hover {
  filter: brightness(0.8);
  transition: 0.3s;
}

.intro-anime-typewriter {
  animation:
    typewriter 2s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}

.line-1 {
  position: relative;
  top: 0;
  width: 24em;
  /* margin: 0 auto; */
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(0%);
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 6.5em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
