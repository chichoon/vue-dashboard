<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { classMerge } from '@/utils/classMerge';
import type { ClassType } from '@/types/common';

interface Props {
  text: string;
  to: string;
  className?: ClassType;
}

defineProps<Props>();

const route = useRoute();
</script>

<template>
  <li :class="classMerge('list', className)">
    <RouterLink :to="to" :class="['list__link', { 'list__link--focused': route.path === to }]">
      <slot />
      <span>{{ text }}</span>
    </RouterLink>
  </li>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  height: 100%;
  padding: 10px 15px 0 15px;

  &__link {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: var(--text-ternary);
    text-decoration: none;
    border-radius: 5px;

    &:hover {
      background-color: var(--bg-primary);
    }

    &--focused {
      background-color: var(--notification-success);
      color: var(--white);
    }
  }
}

:slotted(svg) {
  width: 24px;
  height: 24px;
}
</style>
