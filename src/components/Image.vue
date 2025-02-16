<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img
    :src="profileImage"
    alt="`Simone`"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
  />
</template>

<script setup>
import { defineProps } from 'vue'
import profileImage from '@/assets/profile.png'

const props = defineProps({
  width: String,
  height: String,
})
</script>

<style scoped>
img {
  display: block;
}
</style>
