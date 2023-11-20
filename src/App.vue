<script setup lang="ts">
import { storeToRefs } from 'pinia';

import GNB from './components/molecules/GNB';
import HeaderBar from './components/molecules/HeaderBar';
import { useGNBOpen } from './stores/useGNBOpen';

const store = useGNBOpen();
const { isGNBOpen } = storeToRefs(store);
</script>

<template>
  <div class="page">
    <GNB :class="['page__gnb', { 'page__gnb--open': isGNBOpen }]" />
    <div class="page__inner">
      <HeaderBar />
      <RouterView />
      <!--Footer Bar-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: row-reverse;

  &__inner {
    flex: 1;
    height: 100vh;
    background-color: var(--bg-primary);
  }

  &__gnb {
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
}
</style>
