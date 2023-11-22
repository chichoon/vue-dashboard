import type { UserType } from '@/types/user';
import { INIT_USER_PINIA } from '@/utils/user.constant';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserInfo = defineStore('userInfo', () => {
  const userInfo = ref<UserType>(INIT_USER_PINIA);

  const setUserInfo = (payload: UserType) => {
    userInfo.value = payload;
  };

  return { userInfo, setUserInfo };
});
