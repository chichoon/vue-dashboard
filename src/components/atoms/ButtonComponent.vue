<script setup lang="ts">
import { vRipple } from '@/directives/vRipple';
import type { ColorType } from '@/types/common';

interface Props {
  color: ColorType;
  text: string;
  rounded?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'button',
      { 'button--info': color === 'info' },
      { 'button--success': color === 'success' },
      { 'button--warning': color === 'warning' },
      { 'button--danger': color === 'danger' },
      { 'button--primary': color === 'primary' },
      { 'button--rounded': rounded }
    ]"
    v-ripple
  >
    <span>{{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
.button {
  border: none;
  border-radius: 3px;
  padding: 12px 30px;
  transition: box-shadow 0.2s ease-in;

  & > span {
    color: var(--white);
    font-size: var(--font-md);
  }

  &--rounded {
    border-radius: 100em;
  }

  &--info {
    background-color: var(--notification-info);
    box-shadow:
      0 2px 2px 0 var(--notification-info),
      0 3px 1px -2px var(--notification-info),
      0 1px 5px 0 var(--notification-info);

    &:hover {
      box-shadow: 0 12px 20px -10px var(--notification-info);
    }
  }

  &--success {
    background-color: var(--notification-success);
    box-shadow:
      0 2px 2px 0 var(--notification-success),
      0 3px 1px -2px var(--notification-success),
      0 1px 5px 0 var(--notification-success);

    &:hover {
      box-shadow: 0 12px 20px -10px var(--notification-success);
    }
  }

  &--warning {
    background-color: var(--notification-warning);
    box-shadow:
      0 2px 2px 0 var(--notification-warning),
      0 3px 1px -2px var(--notification-warning),
      0 1px 5px 0 var(--notification-warning);

    &:hover {
      box-shadow: 0 12px 20px -10px var(--notification-warning);
    }
  }

  &--primary {
    background-color: var(--notification-primary);
    box-shadow:
      0 2px 2px 0 var(--notification-primary),
      0 3px 1px -2px var(--notification-primary),
      0 1px 5px 0 var(--notification-primary);

    &:hover {
      box-shadow: 0 12px 20px -10px var(--notification-primary);
    }
  }

  &--danger {
    background-color: var(--notification-danger);
    box-shadow:
      0 2px 2px 0 var(--notification-danger),
      0 3px 1px -2px var(--notification-danger),
      0 1px 5px 0 var(--notification-danger);

    &:hover {
      box-shadow: 0 12px 20px -10px var(--notification-danger);
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
