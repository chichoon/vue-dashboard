<script setup lang="ts">
import TextComponent from '../TextComponent.vue';

interface Props {
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>

<template>
  <div class="dashboard-title">
    <TextComponent :text="title" color="white" size="xl" />
    <TextComponent :text="subtitle" color="white" />
  </div>
</template>

<style scoped lang="scss">
.dashboard-title {
  display: flex;
  flex-direction: column;

  & > span:first-child {
    margin-bottom: 5px;
  }

  & > span:last-child {
    opacity: 0.8;
  }
}
</style>
