<script setup lang="ts">
import GNB from './components/molecules/GNB';
import HeaderBar from './components/molecules/HeaderBar/HeaderBar.vue';
</script>

<template>
  <div class="page">
    <GNB />
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
  flex-direction: row;

  &__inner {
    flex: 1;
    height: 100vh;
    background-color: var(--bg-primary);
  }
}
</style>
