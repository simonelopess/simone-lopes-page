<template>
  <p class="education__institution">{{ props.institution }}</p>
  <p class="education__course">{{ props.course }}</p>
  <p class="education__period">{{ props.period }}</p>
  <p class="education__institution--url">
    <a :href="props.site_url" target="_blank">{{ props.site_url_display }}</a>
  </p>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  institution: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  site_url: {
    type: String,
    required: true,
  },
  site_url_display: {
    type: String,
    required: false,
  },
})
</script>

<style scoped>
.education-cards {
  padding: 0 80px;
  margin-top: 100px;

  display: flex;
  gap: 16px;
}

.education-cards .card {
  border: 1px solid var(--color-gray-700);
  padding: 30px 20px;
  flex-direction: column;
  gap: 0;
}

.education-cards .card p {
  margin: 0;
  margin-bottom: 1rem;
}

.education__institution {
  font-size: 1.2rem;
  color: var(--color-white);
  font-weight: 600;
  min-height: 44px;
}

.education__course {
  font-size: 0.875rem;
  color: var(--color-purple-300);
  font-weight: 400;
}

.education__period {
  font-size: 0.75rem;
  color: var(--color-gray-400);
}

.education__institution--url a {
  text-decoration: none;
  cursor: pointer;
  color: var(--color-green-500);
  font-size: 0.75rem;
}

.education__institution--url a:hover {
  filter: brightness(0.8);
}
</style>
