<script setup lang="ts">
import { useSettings } from '@/stores/useSettings';
import type { ColorType } from '@/types/common';
import { storeToRefs } from 'pinia';
import { SettingsSubText } from '.';

const settingsStore = useSettings();
const { settings } = storeToRefs(settingsStore);
const COLOR_SET: ColorType[] = ['primary', 'info', 'success', 'warning', 'danger'];
</script>

<template>
  <div class="color-selector">
    <SettingsSubText text="sidebar filters" />
    <div class="color-selector__button-wrapper">
      <button
        v-for="color in COLOR_SET"
        :key="color"
        :class="[
          'color-selector__button',
          { 'color-selector__button--info': color === 'info' },
          { 'color-selector__button--success': color === 'success' },
          { 'color-selector__button--warning': color === 'warning' },
          { 'color-selector__button--danger': color === 'danger' },
          { 'color-selector__button--primary': color === 'primary' },
          { 'color-selector__button--selected': color == settings.color }
        ]"
        @click="() => settingsStore.changeColorSettings(color)"
      ></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-selector {
  width: 100%;
  padding: 5px 2px;
  border-bottom: 1px solid var(--border-color);

  & > h5 {
    text-align: center;
    padding: 5px 2px;
    font-weight: 600;
    color: var(--text-primary);
    font-size: var(--font-sm);
    text-transform: uppercase;
  }

  &__button-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px 2px;
  }

  &__button {
    border: 3px solid var(--white);
    width: 23px;
    height: 23px;
    padding: 0;
    border-radius: 20px;
    transition: border-color 0.2s ease-in;
    cursor: pointer;

    &--info {
      background-color: var(--notification-info);
    }

    &--success {
      background-color: var(--notification-success);
    }

    &--warning {
      background-color: var(--notification-warning);
    }

    &--primary {
      background-color: var(--notification-primary);
    }

    &--danger {
      background-color: var(--notification-danger);
    }

    &:hover,
    &--selected {
      border-color: var(--notification-info);
    }
  }
}
</style>
