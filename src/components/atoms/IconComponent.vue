<script setup lang="ts">
import type { Component } from 'vue';

import TextComponent from './TextComponent.vue';

interface Props {
  icon: Component;
  name: string;
}

defineProps<Props>();
</script>

<template>
  <div class="icon">
    <component :is="icon" />
    <TextComponent :text="name" color="secondary" />
  </div>
</template>

<style scoped lang="scss">
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
    color: var(--text-primary);
  }
}
</style>
