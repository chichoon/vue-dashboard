<script setup lang="ts">
import NavigationChip from '@/components/atoms/NavigationChip.vue';
import { NAV_LIST } from './constants';
</script>

<template>
  <div class="gnb-wrapper">
    <ul class="gnb-list">
      <NavigationChip
        v-for="element in NAV_LIST"
        :key="element.text"
        :text="element.text"
        :to="element.to"
        :className="'asd'"
      >
        <component :is="element.icon" />
      </NavigationChip>
    </ul>
  </div>
</template>

<style scoped>
.gnb-list {
  list-style: none;
}
</style>
