<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="experience">
    <Title title="Career background" preTitle="" />
    <div class="experience-cards">
      <Card v-for="career in careerStore.careerPayload" :key="career.id">
        <CareerCard
          :key="career.id"
          :role="career.role"
          :contract="career.contract"
          :period="career.period"
          :description="career.description"
          :company="career.company"
          :tools="career.tools"
        />
      </Card>
    </div>
  </div>
</template>

<script setup>
import { useCareerStore } from '@/stores/career'
import Card from '@/components/Card.vue'
import CareerCard from '@/components/Career-Card.vue'
import Title from '@/components/Title.vue'

const careerStore = useCareerStore()
</script>

<style scoped>
.experience-cards {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0px 80px;
  margin-top: 100px;
}

@media (max-width: 1023px) {
  .experience-cards {
    padding: 1rem;
  }

  .experience-cards .card {
    display: flex;
    flex-direction: column;
    padding: 16px 20px;
    gap: 8px;
  }
}
</style>
