<script setup lang="ts">
import TextComponent from '../TextComponent.vue';

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
      <TextComponent v-if="!!emphasisText" color="success" :text="emphasisText" />
      <TextComponent v-if="!!commonText" color="secondary" :text="commonText" />
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
}

:slotted(.dashboard-middle__subtext > svg) {
  width: 15px;
  height: 15px;
  color: var(--notification-success);
}
</style>
