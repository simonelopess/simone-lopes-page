<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SocialIcons from '@/components/Social-Icons.vue'
</script>

<template>
  <div class="footer">
    <SocialIcons />
    <p>Simone Lopes</p>
    <p>@2025</p>
  </div>
</template>

<style scoped>
.footer {
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}

.footer .social-networks {
  justify-content: center;
}
</style>
