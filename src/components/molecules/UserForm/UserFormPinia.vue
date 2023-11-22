<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { vRipple } from '@/directives';
import { useUserInfo } from '@/stores/useUserInfo';

const userInfoStore = useUserInfo();
const { userInfo } = storeToRefs(userInfoStore);

const companyRef = ref<string>(userInfo.value.company ?? '');
const usernameRef = ref<string>(userInfo.value.username);
const emailRef = ref<string>(userInfo.value.email ?? '');
const firstNameRef = ref<string>(userInfo.value.firstName);
const lastNameRef = ref<string>(userInfo.value.lastName);
const addressRef = ref<string>(userInfo.value.address ?? '');
const cityRef = ref<string>(userInfo.value.city ?? '');
const countryRef = ref<string>(userInfo.value.country ?? '');
const postalCodeRef = ref<string>(userInfo.value.postalCode ?? '');
const bioRef = ref<string>(userInfo.value.bio);

const handleSubmit = () => {
  userInfoStore.setUserInfo({
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
      <ev-text-field placeholder="Company (disabled)" v-model="companyRef" disabled />
      <ev-text-field placeholder="User Name" v-model="usernameRef" />
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
