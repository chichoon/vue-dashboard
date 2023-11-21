<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { CancelIcon, HamburgerIcon } from '@/components/icons';
import { useGNBOpen } from '@/stores/useGNBOpen';

const store = useGNBOpen();
const { isGNBOpen } = storeToRefs(store);

const handleToggleGNB = () => {
  store.toggleGNBOpen();
};
</script>

<template>
  <button class="hamburger" @click="handleToggleGNB">
    <CancelIcon v-if="isGNBOpen" />
    <HamburgerIcon v-else />
  </button>
</template>

<style scoped lang="scss">
@import '../../assets/animation.scss';

.hamburger {
  position: relative;
  display: inline-block;
  color: var(--text-primary);
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;

  &:active {
    animation: button-flash 0.2s ease-in-out;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
