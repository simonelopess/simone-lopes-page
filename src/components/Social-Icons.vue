<template>
  <div class="social-networks">
    <a href="https://github.com/simonelopess" target="_blank">
      <img :src="githubIcon" alt="github icon" />
    </a>
    <a href="https://www.linkedin.com/in/simone-lopes-52367843/" target="_blank">
      <img :src="linkedinIcon" alt="linkedin icon" />
    </a>
    <a href="mailto:silopes.pt@gmail.com">
      <img :src="emailIcon" alt="email icon" />
    </a>
  </div>
</template>

<style scoped>
.social-networks {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>

<script setup>
import emailIcon from '@/assets/icons/email.svg'
import githubIcon from '@/assets/icons/github.svg'
import linkedinIcon from '@/assets/icons/linkedin.svg'
</script>
