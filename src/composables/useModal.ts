import { ref } from 'vue';

export function useModal() {
  const isModalOpen = ref<boolean>(false);

  const handleClickModalOpener = () => {
    isModalOpen.value = !isModalOpen.value;
  };

  const handleClickModalOutside = () => {
    isModalOpen.value = false;
  };

  return { isModalOpen, handleClickModalOpener, handleClickModalOutside };
}
