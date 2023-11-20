<script setup lang="ts">
import NavigationElement from '@/components/atoms/NavigationElement.vue';
import { NAV_LIST } from './constants';
</script>

<template>
  <div class="gnb">
    <div class="gnb__inner">
      <ul class="gnb__list">
        <NavigationElement
          v-for="element in NAV_LIST"
          :key="element.text"
          :text="element.text"
          :to="element.to"
        >
          <component :is="element.icon" />
        </NavigationElement>
      </ul>
    </div>
    <img class="gnb__image" src="/sidebar.jpg" />
  </div>
</template>

<style scoped lang="scss">
.gnb {
  width: 260px;
  height: 100vh;
  position: relative;

  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-secondary);
    z-index: 1;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
