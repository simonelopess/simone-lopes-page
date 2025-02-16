<template>
  <div class="card">
    <div class="card__header">
      <h2 class="card__role">{{ props.role }}</h2>
      <p class="card__contract">{{ props.contract }}</p>
      <p class="card__duration">{{ props.period }}</p>
    </div>
    <div class="card__body">
      <p class="card__company">{{ props.company }}</p>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  role: {
    type: String,
    required: true,
  },
  contract: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
})
</script>
