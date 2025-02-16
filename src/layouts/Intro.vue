<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="intro">
    <div class="intro-text">
      <h1 class="intro-anime-typewriter line-1">Hi, I’m Simone</h1>
      <p>
        During these <strong>6 years</strong> as <strong>Front-End Software Engineer</strong>. My
        role has extended beyond coding to effective communication with various departments, to
        define new features and spearheading the development of new apps.
      </p>
      <button class="intro-button btn">Download CV</button>
    </div>
    <div class="intro-image">
      <Image width="407" height="357" />
    </div>
  </div>
</template>

<script setup>
import Image from '@/components/Image.vue'
</script>

<style scoped>
#intro {
  display: flex;
  padding: 0;
  justify-content: center;
  padding: 0 80px;
}

.intro-text {
  max-width: 662px;
  flex: 1;
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

.intro-image {
  flex: 1;
  display: flex;
  justify-content: end;
}

.intro-button {
  color: var(--color-gray-900);
  margin-top: 24px;
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

@media screen and (max-width: 1023px) {
  #intro {
    display: flex;
    flex-direction: column-reverse;
    padding: 16px;
  }

  .intro-anime-typewriter.line-1 {
    font-size: 48px;
  }

  .intro-image {
    justify-content: center;
  }
}
</style>
