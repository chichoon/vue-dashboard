<script setup lang="ts">
import TextComponent from './TextComponent.vue';

interface Props {
  to?: string;
  text: string;
}

defineProps<Props>();
</script>
<template>
  <RouterLink :to="to ?? ''" class="link-text">
    <TextComponent :text="text" size="sm" is-upper />
  </RouterLink>
</template>

<style scoped lang="scss">
.link-text {
  display: block;
  padding: 15px;
  text-decoration: none;

  & > span:hover {
    color: var(--notification-primary);
  }
}
</style>
