import type { UserType } from '@/types/user';
import { INIT_USER } from '@/utils/constants';

export const userModule = {
  namespaced: true,
  state: {
    userInfo: INIT_USER
  },
  getters: {
    getUserInfo(state: { userInfo: UserType }) {
      return state.userInfo;
    }
  },
  mutations: {
    setUserInfo(state: { userInfo: UserType }, payload: UserType) {
      state.userInfo = payload;
    }
  }
  // actions: {
  //   setUserInfo(context, payload) {
  //     context.commit('setUserInfo', payload);
  //   }
  // }
};
