<script setup lang="ts">
import type { ColorType, FontSizeType } from '@/types/common';

interface Props {
  text: string;
  size?: FontSizeType;
  color?: ColorType | 'secondary' | 'ternary' | 'white';
  weight?: 'light' | 'bold';
  isUpper?: boolean;
}

defineProps<Props>();
</script>

<template>
  <span
    :class="[
      'text',
      { 'text--xs': size === 'xs' },
      { 'text--sm': size === 'sm' },
      { 'text--lg': size === 'lg' },
      { 'text--xl': size === 'xl' },
      { 'text--xxl': size === 'xxl' },
      { 'text--info': color === 'info' },
      { 'text--success': color === 'success' },
      { 'text--warning': color === 'warning' },
      { 'text--danger': color === 'danger' },
      { 'text--primary': color === 'primary' },
      { 'text--secondary': color === 'secondary' },
      { 'text--ternary': color === 'ternary' },
      { 'text--white': color === 'white' },
      { 'text--upper': isUpper },
      { 'text--light': weight === 'light' },
      { 'text--bold': weight === 'bold' }
    ]"
    >{{ text }}</span
  >
</template>

<style scoped lang="scss">
.text {
  color: var(--text-primary);
  font-weight: 500;
  font-size: var(--font-md);
  display: inline-block;

  &--xs {
    font-size: var(--font-xs);
  }

  &--sm {
    font-size: var(--font-sm);
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

  &--white {
    color: var(--white);
  }

  &--upper {
    text-transform: uppercase;
  }

  &--light {
    font-weight: 300;
  }

  &--bold {
    font-weight: 700;
  }
}
</style>
