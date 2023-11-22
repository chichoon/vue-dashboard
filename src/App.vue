<script setup lang="ts">
import { storeToRefs } from 'pinia';

import GNB from './components/molecules/GNB';
import HeaderBar from './components/molecules/HeaderBar';
import { useGNBOpen } from './stores/useGNBOpen';
import { useSettingsModalOpen } from './stores/useSettingsModalOpen';
import FooterBar from './components/molecules/FooterBar.vue';
import SettingsModal from './components/molecules/SettingsModal.vue';
import { CogIcon } from './components/icons';

const gnbStore = useGNBOpen();
const { openSettingsModal } = useSettingsModalOpen();
const { isGNBOpen } = storeToRefs(gnbStore);
</script>

<template>
  <div class="page">
    <GNB :class="['page__gnb', { 'page__gnb--open': isGNBOpen }]" />
    <div class="page__inner">
      <HeaderBar />
      <main class="page__container">
        <button class="page__settings-float" @click="openSettingsModal"><CogIcon /></button>
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
      <FooterBar />
    </div>
  </div>
  <SettingsModal />
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

  &__container {
    flex: 1;
    position: relative;
  }

  &__settings-float {
    position: fixed;
    display: flex;
    align-items: center;
    top: 100px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    right: 0;
    z-index: 5;
    padding: 5px 5px 5px 20px;
    background-color: var(--black-transparent-deep);

    & > svg {
      width: 40px;
      height: 40px;
      color: var(--white);
    }

    &:hover {
      cursor: pointer;
    }
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

.fade-leave-to {
  opacity: 0;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
