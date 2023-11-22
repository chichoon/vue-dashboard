<script setup lang="ts">
import { ref } from 'vue';

import { vRipple } from '@/directives/vRipple';
import { store } from '@/store';

const companyRef = ref<string>(store.getters['userModule/getUserInfo'].company);
const usernameRef = ref<string>(store.getters['userModule/getUserInfo'].username);
const emailRef = ref<string>(store.getters['userModule/getUserInfo'].email);
const firstNameRef = ref<string>(store.getters['userModule/getUserInfo'].firstName);
const lastNameRef = ref<string>(store.getters['userModule/getUserInfo'].lastName);
const addressRef = ref<string>(store.getters['userModule/getUserInfo'].address);
const cityRef = ref<string>(store.getters['userModule/getUserInfo'].city);
const countryRef = ref<string>(store.getters['userModule/getUserInfo'].country);
const postalCodeRef = ref<string>(store.getters['userModule/getUserInfo'].postalCode);
const bioRef = ref<string>(store.getters['userModule/getUserInfo'].bio);

const handleSubmit = () => {
  store.commit('userModule/setUserInfo', {
    username: usernameRef.value,
    firstName: firstNameRef.value,
    lastName: lastNameRef.value,
    bio: bioRef.value,
    address: addressRef.value,
    city: cityRef.value,
    country: countryRef.value,
    postalCode: postalCodeRef.value,
    email: emailRef.value,
    company: companyRef.value
  });
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="user-form">
    <fieldset class="user-form__fieldset">
      <ev-text-field placeholder="Company (disabled)" v-model="companyRef" />
      <ev-text-field placeholder="User Name" v-model="usernameRef" required />
      <ev-text-field placeholder="Email Address" v-model="emailRef" />
    </fieldset>
    <fieldset class="user-form__fieldset">
      <ev-text-field placeholder="First Name" v-model="firstNameRef" />
      <ev-text-field placeholder="Last Name" v-model="lastNameRef" />
    </fieldset>
    <fieldset class="user-form__fieldset">
      <ev-text-field placeholder="Address" v-model="addressRef" />
    </fieldset>
    <fieldset class="user-form__fieldset">
      <ev-text-field placeholder="City" v-model="cityRef" />
      <ev-text-field placeholder="Country" v-model="countryRef" />
      <ev-text-field placeholder="Postal Code" v-model="postalCodeRef" />
    </fieldset>
    <ev-text-field type="textarea" placeholder="About me" v-model="bioRef" />
    <div class="user-form__submit">
      <ev-button html-type="submit" type="primary" v-ripple>submit</ev-button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.user-form {
  &__fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    & > div {
      width: 100%;
    }

    @media screen and (min-width: 961px) {
      flex-direction: row;

      & > div {
        flex: 1;
      }
    }
  }

  &__submit {
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    justify-content: flex-end;

    & > button {
      text-transform: uppercase;
    }
  }
}
</style>
