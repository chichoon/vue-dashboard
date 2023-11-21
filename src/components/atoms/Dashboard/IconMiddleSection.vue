<script setup lang="ts">
interface Props {
  title: string;
  textPrimary: string;
  textSecondary?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="dashboard-middle">
    <h4>{{ title }}</h4>
    <div class="dashboard-middle__text">
      <span>{{ textPrimary }}</span>
      <span v-if="!!textSecondary">{{ textSecondary }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-middle {
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  height: 84px;

  & > h4 {
    text-align: end;
    color: var(--text-secondary);
    font-size: var(--font-md);
  }

  &__text {
    height: fit-content;
    text-align: end;

    & > span {
      color: var(--text-primary);
      font-size: var(--font-xxl);
      font-weight: 300;
    }

    & > span:nth-child(2) {
      margin-left: 5px;
      font-size: var(--font-lg);
    }
  }
}
</style>
