<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import GNB from './components/molecules/GNB';
import HeaderBar from './components/molecules/HeaderBar';
import FooterBar from './components/molecules/FooterBar.vue';
import SettingsModal from './components/molecules/SettingsModal.vue';
import { vClickOutside } from './directives';
import { useGNBOpen } from './stores/useGNBOpen';
import { CogIcon } from './components/icons';

const gnbStore = useGNBOpen();
const { isGNBOpen } = storeToRefs(gnbStore);
const isModalOpen = ref<boolean>(false);

const handleClickModalOutside = () => {
  isModalOpen.value = false;
};

const handleClickModalOpener = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="page">
    <GNB :class="['page__gnb', { 'page__gnb--open': isGNBOpen }]" />
    <div class="page__inner">
      <HeaderBar />
      <main class="page__container">
        <div class="page__settings-modal" v-click-outside="handleClickModalOutside">
          <button class="page__settings-float" @click="handleClickModalOpener">
            <CogIcon />
          </button>
          <transition name="fade-down" mode="in-out">
            <SettingsModal v-if="isModalOpen" />
          </transition>
        </div>
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
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
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    background-color: var(--bg-primary);
  }

  &__container {
    flex: 1;
    position: relative;
  }

  &__settings-modal {
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

.fade-leave-to,
.fade-enter-from {
  // Vue 3부터는 enter-from 과 leave-to 사용
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-out;
}

.fade-down-leave-to,
.fade-down-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.2s ease-in;
}
</style>
