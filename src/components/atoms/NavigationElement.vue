<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { RouterLink, useRoute } from 'vue-router';

import { useSettings } from '@/stores/useSettings';

interface Props {
  text: string;
  to: string;
}

defineProps<Props>();

const route = useRoute();
const settingsStore = useSettings();
const { settings } = storeToRefs(settingsStore);
</script>

<template>
  <li class="list">
    <RouterLink
      :to="to"
      :class="[
        'list__link',
        { 'list__link--success': route.path === to && settings.color === 'success' },
        { 'list__link--info': route.path === to && settings.color === 'info' },
        { 'list__link--primary': route.path === to && settings.color === 'primary' },
        { 'list__link--warning': route.path === to && settings.color === 'warning' },
        { 'list__link--danger': route.path === to && settings.color === 'danger' }
      ]"
    >
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

    &--success {
      background-color: var(--notification-success) !important;
      color: var(--white);
    }

    &--info {
      background-color: var(--notification-info) !important;
      color: var(--white);
    }

    &--primary {
      background-color: var(--notification-primary) !important;
      color: var(--white);
    }

    &--warning {
      background-color: var(--notification-warning) !important;
      color: var(--white);
    }

    &--danger {
      background-color: var(--notification-danger) !important;
      color: var(--white);
    }
  }
}

:slotted(svg) {
  width: 24px;
  height: 24px;
}
</style>
