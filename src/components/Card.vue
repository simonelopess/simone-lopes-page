<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="career-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.career-card {
  background-color: var(--color-gray-800);
  padding: 70px 85px 100px;
  border-radius: 8px;

  display: flex;
  gap: 100px;
}
</style>
