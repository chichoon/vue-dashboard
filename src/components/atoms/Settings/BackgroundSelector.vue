<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useSettings } from '@/stores/useSettings';
import type { GNBImageType } from '@/types/common';
import SettingsSubText from './SettingsSubText.vue';

const settingsStore = useSettings();
const { settings } = storeToRefs(settingsStore);
const IMAGE_SET: GNBImageType[] = [1, 2, 3, 4];
</script>

<template>
  <div class="background-selector">
    <SettingsSubText text="images" />
    <div class="background-selector__image-wrapper">
      <button
        v-for="imageIndex in IMAGE_SET"
        :class="[
          'background-selector__image-button',
          { 'background-selector__image-button--selected': imageIndex === settings.image }
        ]"
        :key="imageIndex"
        :style="`background-image: url(./sidebar_${imageIndex}.jpg)`"
        @click="() => settingsStore.changeImageSettings(imageIndex)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.background-selector {
  padding: 5px 2px;

  &__image-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 2px;
  }

  &__image-button {
    border: 3px solid var(--white);
    width: 47.5px;
    height: 100px;
    background-size: cover;
    border-radius: 5px;
    cursor: pointer;

    &:hover,
    &--selected {
      border-color: var(--notification-info);
    }
  }
}
</style>
