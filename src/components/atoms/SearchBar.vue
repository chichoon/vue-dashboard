<script setup lang="ts">
import { ref } from 'vue';

import { CancelIcon } from '../icons';

interface Props {
  isInDarkArea?: boolean;
}

defineProps<Props>();

const isFocused = ref<boolean>(false);
const searchValue = ref<string>('');

const handleClickEraseButton = () => {
  searchValue.value = '';
};
</script>

<template>
  <div :class="['search-bar', { 'search-bar--focused': isFocused }]">
    <span
      :class="[
        'search-bar__placeholder',
        { 'search-bar__placeholder--shrink': isFocused || searchValue.length >= 1 }
      ]"
      >Search...</span
    >
    <input
      :class="['search-bar__input', { 'search-bar__input--light': isInDarkArea }]"
      type="text"
      @focus="() => (isFocused = true)"
      @blur="() => (isFocused = false)"
      v-model="searchValue"
    />
    <button
      @click="handleClickEraseButton"
      :class="[
        'search-bar__button',
        { 'search-bar__button--hidden': searchValue.length <= 0 || isInDarkArea }
      ]"
    >
      <CancelIcon />
    </button>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  position: relative;
  width: 200px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--border-color);

  &--focused::before {
    transform: scaleX(100%) !important;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    bottom: -1px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    border-bottom: 2px solid var(--notification-primary);
  }

  &__placeholder {
    position: absolute;
    color: var(--text-secondary);
    font-size: var(--font-md);
    transition:
      font-size 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
      transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);

    &--shrink {
      transform: translateY(-20px);
      font-size: var(--font-xs);
    }
  }

  &__input {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: var(--text-primary);
    padding: 10px 30px 10px 0;
    position: relative;

    &--light {
      color: var(--white);
    }

    &:focus {
      outline: none;
    }
  }

  &__button {
    position: absolute;
    opacity: 1;
    transition: opacity 0.1s ease-in;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: var(--white);
    box-shadow: 0 0 3px 1px var(--shadow-color);
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      width: 20px;
      height: 20px;
      color: var(--text-secondary);
    }

    &--hidden {
      opacity: 0;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
