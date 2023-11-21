<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>

<template>
  <div class="dashboard-title">
    <h3>{{ title }}</h3>
    <span>{{ subtitle }}</span>
  </div>
</template>

<style scoped lang="scss">
.dashboard-title {
  color: var(--white);

  & > h3 {
    font-size: var(--font-xl);
    margin-bottom: 5px;
  }

  & > span {
    font-size: var(--font-md);
    opacity: 0.8;
  }
}
</style>
