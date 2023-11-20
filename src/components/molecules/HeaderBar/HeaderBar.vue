<script setup lang="ts">
import { useRoute } from 'vue-router';

import SearchBar from '@/components/atoms/SearchBar.vue';
import { TITLE_LIST } from './constants';

const route = useRoute();
</script>

<template>
  <header class="header">
    <div class="header__section">
      <h2 class="header__title">{{ TITLE_LIST[route.path] }}</h2>
    </div>
    <div class="header__section">
      <SearchBar />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;

  &__section {
    flex: 1;

    &:nth-child(1) {
      padding-left: 15px;
    }

    &:nth-child(2) {
      padding-right: 15px;
    }
  }

  &__title {
    height: 50px;
    font-size: var(--font-xl);
    color: var(--text-primary);
    font-weight: 300;
    margin-right: 15px;
    padding: 10px 0;
  }
}
</style>
