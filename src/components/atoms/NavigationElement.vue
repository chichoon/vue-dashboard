<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

interface Props {
  text: string;
  to: string;
}

defineProps<Props>();

const route = useRoute();
</script>

<template>
  <li class="list">
    <RouterLink :to="to" :class="['list__link', { 'list__link--focused': route.path === to }]">
      <slot />
      <span>{{ text }}</span>
    </RouterLink>
  </li>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  padding: 10px 15px 0 15px;

  &__link {
    display: inline-block;
    width: 100%;
    padding: 10px 15px;
    color: var(--text-ternary);
    text-decoration: none;
    border-radius: 3px;
    display: flex;
    align-items: center;
    transition: background-color 0.1s ease-in;

    & > span {
      margin-left: 15px;
      font-size: var(--font-md);
    }

    &:hover {
      background-color: var(--bg-hover);
    }

    &--focused {
      background-color: var(--notification-success) !important;
      color: var(--white);
    }
  }
}

:slotted(svg) {
  width: 24px;
  height: 24px;
}
</style>
