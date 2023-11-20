<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { classMerge } from '@/utils/classMerge';
import type { ClassType } from '@/types/common';

interface Props {
  text: string;
  to: string;
  className: ClassType;
}

defineProps<Props>();
</script>

<template>
  <li :class="classMerge('list', className)">
    <RouterLink :to="to" class="list__link">
      <slot />
      <span>{{ text }}</span>
    </RouterLink>
  </li>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  height: 100%;

  &__link {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #dcdcdc;
    text-decoration: none;
  }
}

:slotted(svg) {
  width: 24px;
  height: 24px;
}
</style>
