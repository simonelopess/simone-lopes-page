<template>
  <main>
    <CareerCard
      v-for="career in careerStore.careerPayload"
      :key="career.id"
      :role="career.role"
      :contract="career.contract"
      :period="career.period"
      :description="career.description"
      :company="career.company"
    />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCareerStore } from '@/stores/career'
import CareerCard from '@/components/Career-Card.vue'

const careerStore = useCareerStore()

onMounted(() => {
  const career = careerStore.careerPayload
  console.log(career)
})
</script>
