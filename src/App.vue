<script setup lang="ts">
import { storeToRefs } from 'pinia';

import GNB from './components/molecules/GNB';
import HeaderBar from './components/molecules/HeaderBar';
import { useGNBOpen } from './stores/useGNBOpen';
import FooterBar from './components/molecules/FooterBar.vue';

const store = useGNBOpen();
const { isGNBOpen } = storeToRefs(store);
</script>

<template>
  <div class="page">
    <GNB :class="['page__gnb', { 'page__gnb--open': isGNBOpen }]" />
    <div class="page__inner">
      <HeaderBar />
      <RouterView />
      <FooterBar />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  overflow-x: hidden;

  &__inner {
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    background-color: var(--bg-primary);
  }

  &__gnb {
    margin-right: -260px;
    transition: margin 0.2s ease-in;

    &--open {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;

    &__gnb {
      margin-right: 0;
    }
  }
}
</style>
