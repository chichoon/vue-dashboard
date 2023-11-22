<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useSettingsModalOpen } from '@/stores/useSettingsModalOpen';
import { vClickOutside } from '@/directives';
import { TriangleIcon } from '../icons';
import { ColorSelector } from '../atoms/Settings';

const modalOpenStore = useSettingsModalOpen();
const { isSettingsModalOpen } = storeToRefs(modalOpenStore);
</script>

<template>
  <Teleport to="#modal">
    <transition>
      <!-- TODO: Transition -->
      <div
        v-if="isSettingsModalOpen"
        class="settings-modal"
        v-click-outside="modalOpenStore.closeSettingsModal"
      >
        <div class="settings-modal__inner">
          <ColorSelector />
        </div>
        <TriangleIcon />
      </div>
    </transition>
  </Teleport>
</template>

<style scoped lang="scss">
.settings-modal {
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 80px;
  right: 60px;
  z-index: 5;

  &__inner {
    padding: 10px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  }

  & > svg {
    width: 30px;
    height: 30px;
    color: var(--white);
    margin-left: -10px;
    margin-top: 30px;
  }
}
</style>
