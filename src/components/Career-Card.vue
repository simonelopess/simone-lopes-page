<template>
  <div class="career-card__header">
    <h2 class="career-card__role">{{ props.role }}</h2>
    <p class="career-card__contract">{{ props.contract }}</p>
    <p class="career-card__duration">{{ props.period }}</p>
  </div>
  <div class="career-card__body">
    <p class="career-card__company-name">{{ props.company }}</p>
    <p class="career-card__job-description">{{ props.description }}</p>
    <div class="carrer-tools" v-if="props.tools[0] !== ''">
      <span v-for="tool in tools" :key="tool">
        <img
          :src="icons[tool]"
          :alt="`${tool} icon`"
          :aria-label="`${tool} icon`"
          :title="`${tool} icon`"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import pinia from '@/assets/icons/pinia.svg'
import tailwind from '@/assets/icons/tailwind.svg'
import react from '@/assets/icons/react.svg'
import redux from '@/assets/icons/redux.svg'
import typescript from '@/assets/icons/typescript.svg'

import github from '@/assets/icons/github.svg'
import javascript from '@/assets/icons/javascript.svg'
import node from '@/assets/icons/node.svg'
import storybook from '@/assets/icons/storybook.svg'
import vite from '@/assets/icons/vite.svg'
import jira from '@/assets/icons/jira.svg'
import confluence from '@/assets/icons/confluence.svg'
import next from '@/assets/icons/next.svg'
import jest from '@/assets/icons/jest.svg'
import angular from '@/assets/icons/angular.svg'

const icons = {
  pinia,
  tailwind,
  react,
  redux,
  typescript,
  github,
  javascript,
  node,
  storybook,
  vite,
  jira,
  confluence,
  next,
  jest,
  angular,
}

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
  tools: {
    type: Array,
    required: false,
  },
})

console.log('tools', props.tools[0] === '')
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
  flex: 2;
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

.carrer-tools {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 40px;
  flex-wrap: wrap;
}

.carrer-tools img {
  width: 24px;
  height: 24px;
}
</style>
