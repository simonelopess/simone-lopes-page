<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="experience">
    <Title title="Career background" preTitle="4 years of" />
    <div class="experience-cards">
      <Card v-for="career in careerStore.careerPayload" :key="career.id">
        <CareerCard
          :key="career.id"
          :role="career.role"
          :contract="career.contract"
          :period="career.period"
          :description="career.description"
          :company="career.company"
        />
      </Card>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCareerStore } from '@/stores/career'
import Card from '@/components/Card.vue'
import CareerCard from '@/components/Career-Card.vue'
import Title from '@/components/Title.vue'

const careerStore = useCareerStore()

onMounted(() => {
  const career = careerStore.careerPayload
  console.log(career)
})
</script>

<style scoped>
.experience-cards {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px 80px;
  margin-top: 100px;
}
</style>
