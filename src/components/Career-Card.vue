<template>
  <div class="career-card__header">
    <h2 class="career-card__role">{{ props.role }}</h2>
    <p class="career-card__contract">{{ props.contract }}</p>
    <p class="career-card__duration">{{ props.period }}</p>
  </div>
  <div class="career-card__body">
    <p class="career-card__company-name">{{ props.company }}</p>
    <p class="career-card__job-description">{{ props.description }}</p>
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

<style scoped>
.career-card {
  background-color: var(--color-gray-800);
  padding: 70px 85px 100px;
  border-radius: 8px;

  display: flex;
  gap: 100px;
}

.career-card__header {
  flex: 1;
}

.career-card__body {
  flex: 3;
}

.career-card__role {
  font-weight: 400;
  color: var(--color-white);
  font-size: 24px;
  margin-bottom: 0;
}

.career-card__contract {
  color: var(--color-purple-300);
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
}

.career-card__duration {
  color: var(--color-gray-400);
  font-size: 0.857rem;
  font-weight: 300;
  margin-top: 0.5rem;
}

.career-card__company-name {
  color: var(--color-purple-300);
  font-size: 1rem;
}

.career-card__job-description {
  color: var(--color-gray-400);
  font-size: 0.857rem;
}
</style>
