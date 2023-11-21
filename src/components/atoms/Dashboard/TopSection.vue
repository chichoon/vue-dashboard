<script setup lang="ts">
import type { ColorType } from '@/types/common';
import { createLinearGradient } from '@/utils/createLinearGradient';

interface Props {
  color: ColorType;
  type: 'icon' | 'title' | 'graph';
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'dashboard-top',
      { 'dashboard-top--icon': type === 'icon' },
      { 'dashboard-top--title': type === 'title' },
      { 'dashboard-top--graph': type === 'graph' }
    ]"
    :style="`background: ${createLinearGradient(
      color
    )}; box-shadow: 0 12px 20px -10px var(--notification-${color});`"
  >
    <slot name="top"></slot>
  </div>
</template>

<style scoped lang="scss">
.dashboard-top {
  z-index: 2;
  margin: -20px 15px 0;
  padding: 0;
  border-radius: 3px;

  &--icon {
    float: left;
    width: 86px;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--graph {
    min-height: 160px;
  }

  &--title {
    padding: 15px 20px;
  }
}

:slotted(.dashboard-top--icon > svg) {
  width: 35px;
  height: 35px;
  color: var(--white);
}
</style>
