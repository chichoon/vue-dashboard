import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGNBOpen = defineStore('gnbOpen', () => {
  const isGNBOpen = ref<boolean>(false);

  const toggleGNBOpen = () => {
    isGNBOpen.value = !isGNBOpen.value;
  };

  return { isGNBOpen, toggleGNBOpen };
});
