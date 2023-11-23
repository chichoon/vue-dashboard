<script setup lang="ts">
import type { ColorType, FontSizeType } from '@/types/common';

interface Props {
  text: string;
  size: FontSizeType;
  color?: ColorType | 'secondary' | 'ternary';
}

defineProps<Props>();
</script>

<template>
  <span
    :class="[
      'text',
      { 'text--xs': size === 'xs' },
      { 'text--sm': size === 'sm' },
      { 'text--md': size === 'md' },
      { 'text--lg': size === 'lg' },
      { 'text--xl': size === 'xl' },
      { 'text--xxl': size === 'xxl' },
      { 'text--info': color === 'info' },
      { 'text--success': color === 'success' },
      { 'text--warning': color === 'warning' },
      { 'text--danger': color === 'danger' },
      { 'text--primary': color === 'primary' },
      { 'text--secondary': color === 'secondary' },
      { 'text--ternary': color === 'ternary' }
    ]"
    >{{ text }}</span
  >
</template>

<style scoped lang="scss">
.text {
  color: var(--text-primary);

  &--xs {
    font-size: var(--font-xs);
  }

  &--sm {
    font-size: var(--font-sm);
  }

  &--md {
    font-size: var(--font-md);
  }

  &--lg {
    font-size: var(--font-lg);
  }

  &--xl {
    font-size: var(--font-xl);
  }

  &--xxl {
    font-size: var(--font-xxl);
  }

  &--info {
    color: var(--notification-info);
  }

  &--success {
    color: var(--notification-success);
  }

  &--warning {
    color: var(--notification-warning);
  }

  &--primary {
    color: var(--notification-primary);
  }

  &--danger {
    color: var(--notification-danger);
  }

  &--secondary {
    color: var(--text-secondary);
  }

  &--ternary {
    color: var(--text-ternary);
  }
}
</style>
