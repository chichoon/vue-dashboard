<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useUserInfo } from '@/stores/useUserInfo';
import { vRipple } from '@/directives';
import Dashboard from '@/components/atoms/Dashboard';
import TextComponent from '@/components/atoms/TextComponent.vue';

const userInfoStore = useUserInfo();
const { userInfo } = storeToRefs(userInfoStore);
</script>

<template>
  <section class="user-info">
    <Dashboard.WrapperSection type="title">
      <template #inner>
        <img src="/crying_cat.jpg" alt="crying cat" class="user-info__image" />
        <div class="user-info__bottom">
          <TextComponent :text="userInfo.username" color="secondary" />
          <TextComponent :text="`${userInfo.firstName} ${userInfo.lastName}`" size="xl" />
          <TextComponent :text="userInfo.bio" />
          <ev-button type="primary" shape="radius" v-ripple>Follow</ev-button>
        </div>
      </template>
    </Dashboard.WrapperSection>
  </section>
</template>

<style scoped lang="scss">
.user-info {
  margin-top: 10px;
  padding: 0 15px;
  width: 100%;

  @media screen and (min-width: 1281px) {
    max-width: 33.33333%;
    min-width: 33.33333%;
    flex: 33.3333%;
  }

  &__image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 80px;
    z-index: 2;
    margin: -50px auto 0;
    box-shadow:
      0 10px 30px -12px rgba(0, 0, 0, 0.42),
      0 4px 25px 0 rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(0, 0, 0, 0.2);
    padding: 0;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    padding: 15px 20px;
    border-radius: 3px;

    & > span:nth-child(2) {
      margin: 10px 0;
    }

    & > span:nth-child(3) {
      margin-bottom: 15px;
      text-align: center;
    }
  }
}
</style>
