import type { UserType } from '@/types/user';

const INIT_USER = {
  username: '',
  firstName: '',
  lastName: '',
  bio: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  email: '',
  company: ''
};

export const userModule = {
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
