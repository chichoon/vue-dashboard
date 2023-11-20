<script setup lang="ts">
import NavigationElement from '@/components/atoms/NavigationElement.vue';
import { NAV_LIST } from './constants';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="gnb-wrapper">
    <ul class="gnb-list">
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
</template>

<style scoped>
.gnb-list {
  list-style: none;
}
</style>
