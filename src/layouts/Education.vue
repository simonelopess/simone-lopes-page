<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import CardEducation from '@/components/Education-Card.vue'
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'

import { useEducationStore } from '@/stores/education'

const educationStore = useEducationStore()
</script>

<template>
  <div id="education">
    <Title :title="$t('education')" preTitle="" />
    <div class="education-cards">
      <Card v-for="education in educationStore.educationPayload" :key="education.id">
        <CardEducation
          :key="education.id"
          :institution="education.institution"
          :course="education.course"
          :period="education.period"
          :site_url="education.site_url"
          :site_url_display="education.site_url_display"
        ></CardEducation>
      </Card>
    </div>
  </div>
</template>

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

@media (max-width: 1023px) {
  .education-cards {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
}
</style>
