<script setup lang="ts">
import { useRoute } from 'vue-router';

import SearchBar from '@/components/atoms/SearchBar.vue';
import { DashboardIcon, BellIcon, UserIcon } from '@/components/icons';
import { vRipple } from '@/directives';
import { TITLE_LIST } from './constants';
import HamburgerButton from '@/components/atoms/HamburgerButton.vue';

const route = useRoute();
</script>

<template>
  <header class="header">
    <div class="header__left-section">
      <h2 class="header__title">{{ TITLE_LIST[route.path] }}</h2>
    </div>
    <div class="header__right-section">
      <SearchBar />
      <div class="header__icons">
        <RouterLink class="header__icon" to="/dashboard" v-ripple="'333333'">
          <DashboardIcon />
        </RouterLink>
        <RouterLink class="header__icon" to="/notifications" v-ripple="'333333'">
          <BellIcon />
        </RouterLink>
        <RouterLink class="header__icon" to="/user" v-ripple="'333333'">
          <UserIcon />
        </RouterLink>
      </div>
    </div>
    <HamburgerButton class="header__hamburger" v-ripple="'333333'" />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;

  &__left-section {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
  }

  &__title {
    height: 50px;
    font-size: var(--font-xl);
    color: var(--text-primary);
    font-weight: 300;
    margin-right: 15px;
    padding: 10px 0;
  }

  &__right-section {
    display: none;

    @media screen and (min-width: 992px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 400px;
      padding-right: 15px;
    }
  }

  &__icons {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 0 5px;
    justify-content: space-between;
  }

  &__icon {
    position: relative;
    display: inline-block;
    padding: 10px 15px;
    color: var(--text-primary);

    & > svg {
      width: 20px;
      height: 20px;
    }

    &:nth-child(2)::before {
      content: '5';
      position: absolute;
      top: 0px;
      right: 5px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      background-color: var(--notification-danger);
      width: 20px;
      height: 20px;
      border-radius: 20px;
      font-size: var(--font-sm);
      font-weight: 300;
      color: var(--white);
      border: 1px solid var(--white);
    }
  }

  &__hamburger {
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
}
</style>
