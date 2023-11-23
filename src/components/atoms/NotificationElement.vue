<script setup lang="ts">
import type { ColorType } from '@/types/common';
import { CancelIcon } from '../icons';
import TextComponent from './TextComponent.vue';

interface Props {
  text?: string;
  color: ColorType;
  boldText?: string;
  isCancelable?: boolean;
  onCancel?: (e: Event) => void;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'notification',
      { 'notification--info': color === 'info' },
      { 'notification--success': color === 'success' },
      { 'notification--warning': color === 'warning' },
      { 'notification--danger': color === 'danger' },
      { 'notification--primary': color === 'primary' }
    ]"
  >
    <slot />
    <div class="notification__text">
      <TextComponent v-if="!!boldText" :text="boldText" weight="bold" color="white" is-upper />
      <TextComponent v-if="!!text" :text="text" color="white" />
    </div>
    <button v-if="isCancelable" type="button" class="notification__cancel" @click="onCancel">
      <CancelIcon />
    </button>
  </div>
</template>

<style scoped lang="scss">
.notification {
  width: 100%;
  padding: 20px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;

  & > svg {
    width: 10px;
    height: 10px;
  }

  &__cancel {
    background: none;
    border: none;
    padding: 0;
    margin-left: 10px;
    width: 20px;
    height: 20px;

    & > svg {
      color: var(--white);
      width: 20px;
      height: 20px;
    }
  }

  &__text {
    flex: 1;
  }

  &--info {
    background-color: var(--notification-info);
    box-shadow: 0 12px 20px -10px var(--notification-info);
  }

  &--success {
    background-color: var(--notification-success);
    box-shadow: 0 12px 20px -10px var(--notification-success);
  }

  &--warning {
    background-color: var(--notification-warning);
    box-shadow: 0 12px 20px -10px var(--notification-warning);
  }

  &--primary {
    background-color: var(--notification-primary);
    box-shadow: 0 12px 20px -10px var(--notification-primary);
  }

  &--danger {
    background-color: var(--notification-danger);
    box-shadow: 0 12px 20px -10px var(--notification-danger);
  }
}

:slotted(svg) {
  width: 30px;
  height: 30px;
  color: var(--white);
  margin-right: 10px;
}
</style>
