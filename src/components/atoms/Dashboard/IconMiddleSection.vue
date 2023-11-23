<script setup lang="ts">
import TextComponent from '../TextComponent.vue';

interface Props {
  title: string;
  textPrimary: string;
  textSecondary?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="dashboard-middle">
    <TextComponent class="dashboard-middle__title" :text="title" color="secondary" />
    <div class="dashboard-middle__text">
      <TextComponent weight="light" :text="textPrimary" size="xxl" />
      <TextComponent v-if="!!textSecondary" :text="textSecondary" size="lg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-middle {
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  height: 84px;

  &__title {
    text-align: end;
  }

  &__text {
    height: fit-content;
    text-align: end;

    & > span:nth-child(2) {
      margin-left: 5px;
    }
  }
}
</style>
