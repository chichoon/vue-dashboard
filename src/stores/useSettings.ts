import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { ColorType, SettingsType, GNBImageType } from '@/types/common';

export const useSettings = defineStore('settings', () => {
  const settings = ref<SettingsType>({
    color: 'success',
    image: 2
  });

  const changeColorSettings = (color: ColorType) => {
    settings.value.color = color;
  };

  const changeImageSettings = (image: GNBImageType) => {
    settings.value.image = image;
  };

  return { settings, changeColorSettings, changeImageSettings };
});
