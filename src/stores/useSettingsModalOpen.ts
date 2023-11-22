import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsModalOpen = defineStore('settingsModalOpen', () => {
  const isSettingsModalOpen = ref<boolean>(false);

  const openSettingsModal = () => {
    isSettingsModalOpen.value = true;
    console.log('hi');
  };

  const closeSettingsModal = () => {
    isSettingsModalOpen.value = false;
  };

  return { isSettingsModalOpen, openSettingsModal, closeSettingsModal };
});
