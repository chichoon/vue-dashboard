<script setup lang="ts">
import { computed, watch } from 'vue';

import { store } from '@/store';
import { vRipple } from '@/directives/vRipple';
import Dashboard from '@/components/atoms/Dashboard';

const data = computed(() => store.getters['userModule/getUserInfo']);

watch(data, () => {
  console.log(data);
});
</script>

<template>
  <section class="user-info">
    <Dashboard.WrapperSection type="title">
      <template #inner>
        <img src="/polite_cat.webp" alt="polite cat" class="user-info__image" />
        <div class="user-info__bottom">
          <span>{{ data.username }}</span>
          <h4>{{ data.firstName }} {{ data.lastName }}</h4>
          <p>{{ data.bio }}</p>
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

    & > span {
      color: var(--text-secondary);
      font-size: var(--font-md);
    }

    & > h4 {
      margin: 10px 0;
      color: var(--text-primary);
      font-size: var(--font-xl);
    }

    & > p {
      color: var(--text-primary);
      font-size: var(--font-md);
      margin-bottom: 15px;
      text-align: center;
    }
  }
}
</style>
