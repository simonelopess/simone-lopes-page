<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'
</script>

<template>
  <div id="education">
    <Title title="Education" preTitle="" />
    <div class="education-cards">
      <Card>
        <p class="education__institution">FAETEC - Escola Técnica do Estado do Rio de Janeiro</p>
        <p class="education__course">Technical High School in Information System</p>
        <p class="education__period">Jan 2006 - Jun 2009</p>
        <p class="education__institution--url">
          <RouterLink to="https://www.faetec.rj.gov.br">www.faetec.rj.gov.br</RouterLink>
        </p>
      </Card>
      <Card>
        <p class="education__institution">FEUC - Fundação Educacion Unificada Campograndense</p>
        <p class="education__course">Graduation in Information System</p>
        <p class="education__period">Jan 2013 - Jun 2017</p>
        <p class="education__institution--url">
          <RouterLink to="https://www.feuc.br">www.feuc.br</RouterLink>
        </p>
      </Card>
      <Card>
        <p class="education__institution">PUC Minas - Pontifícia Universidade Católica Minas</p>
        <p class="education__course">Post Graduation - Web Development Full Stack</p>
        <p class="education__period">Aug 2020 - Abr 2022</p>
        <p class="education__institution--url">
          <RouterLink to="https://www.pucminas.br/">www.pucminas.br</RouterLink>
        </p>
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
</style>
