<script setup lang="ts">
import { storeToRefs } from 'pinia';

import NavigationElement from '@/components/atoms/NavigationElement.vue';
import SearchBar from '@/components/atoms/SearchBar.vue';
import { VueIcon, UploadIcon } from '@/components/icons';
import { useSettings } from '@/stores/useSettings';
import { NAV_LIST } from './constants';

const settingsStore = useSettings();
const { settings } = storeToRefs(settingsStore);
</script>

<template>
  <div class="gnb" :style="`background-image: url(/vue-dashboard/sidebar_${settings.image}.jpg);`">
    <div class="gnb__inner">
      <a href="https://github.com/chichoon" target="_blank" noreferrer class="gnb__title">
        <div class="gnb__vue-icon">
          <VueIcon />
        </div>
        <h1>VUE MD</h1>
      </a>
      <ul class="gnb__list">
        <li class="gnb__search-bar">
          <SearchBar is-in-dark-area />
        </li>
        <NavigationElement
          v-for="element in NAV_LIST"
          :key="element.text"
          :text="element.text"
          :to="element.to"
        >
          <component :is="element.icon" />
        </NavigationElement>
        <NavigationElement text="Upgrade To PRO" to="upgrade" class="gnb__upgrade">
          <UploadIcon />
        </NavigationElement>
      </ul>
      <NavigationElement text="Upgrade To PRO" to="upgrade" class="gnb__footer">
        <UploadIcon />
      </NavigationElement>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gnb {
  width: 260px;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: 50%;

  &__title {
    width: calc(100% - 30px);
    height: 70px;
    padding: 15px 5px;
    margin: 0 15px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid var(--border-color);

    & > h1 {
      margin-left: 10px;
      font-size: var(--font-xl);
      color: var(--white);
    }
  }

  &__vue-icon {
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      width: 25px;
      height: 25px;
      margin-top: 2px;
    }
  }

  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-secondary);
    z-index: 1;
  }

  &__list {
    width: 100%;
    height: calc(100vh - 140px);
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__search-bar {
    margin-top: 30px;
    @media screen and (min-width: 992px) {
      display: none !important;
    }
  }

  &__upgrade {
    @media screen and (min-width: 992px) {
      display: none !important;
    }
  }

  &__footer {
    padding-top: 0;
    height: 70px;
    display: flex;

    @media screen and (max-width: 991px) {
      display: none;
    }
  }
}
</style>
