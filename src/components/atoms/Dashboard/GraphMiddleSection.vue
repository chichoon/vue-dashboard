<script setup lang="ts">
interface Props {
  title: string;
  emphasisText?: string;
  commonText?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="dashboard-middle">
    <h4>{{ title }}</h4>
    <div class="dashboard-middle__subtext">
      <slot name="emphasis-text-icon"></slot>
      <span class="dashboard-middle__emphasized-text" v-if="!!emphasisText">{{
        emphasisText
      }}</span>
      <span class="dashboard-middle__common-text" v-if="!!commonText">{{ commonText }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-middle {
  padding: 15px;

  & > h4 {
    font-size: var(--font-xl);
    color: var(--text-primary);
    margin-bottom: 5px;
  }

  &__subtext {
    vertical-align: middle;
    font-size: var(--font-md);
  }

  &__emphasized-text {
    color: var(--notification-success);
  }

  &__common-text {
    color: var(--text-secondary);
  }
}

:slotted(.dashboard-middle__subtext > svg) {
  width: 15px;
  height: 15px;
  color: var(--notification-success);
}
</style>
