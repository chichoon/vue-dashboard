<script setup lang="ts">
interface Props {
  type: 'icon' | 'title' | 'graph';
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'dashboard-wrapper',
      { 'dashboard-wrapper--icon': type === 'icon' },
      { 'dashboard-wrapper--title': type === 'title' },
      { 'dashboard-wrapper--graph': type === 'graph' }
    ]"
  >
    <slot name="inner"> </slot>
  </div>
</template>

<style scoped lang="scss">
.dashboard-wrapper {
  background-color: var(--white);
  margin: 25px 0;
  position: relative;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;
  overflow: unset;

  &--graph {
    display: flex;
    flex-direction: column;
  }
}
</style>
