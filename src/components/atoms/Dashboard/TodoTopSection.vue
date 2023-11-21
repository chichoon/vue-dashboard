<script setup lang="ts">
import { inject } from 'vue';

import { vRipple } from '@/directives/vRipple';
import { type TodoCategory, type TodoInjection } from '@/types/todo';
import { TodoInjectionKey } from '@/injection/todo';

interface Props {
  todoCategories: TodoCategory[];
}

defineProps<Props>();

const { changeSelected } = inject(TodoInjectionKey) as TodoInjection;
</script>

<template>
  <div class="dashboard-title">
    <span>Tasks: </span>
    <div class="dashboard-title__button-wrapper">
      <button
        v-for="(category, index) in todoCategories"
        @click="() => changeSelected(index)"
        :key="category.title"
        v-ripple
      >
        <component :is="category.icon" />
        <span>{{ category.title }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--white);

  & > span {
    margin-right: 20px;
  }

  &__button-wrapper {
    display: flex;
    flex-direction: row;

    & > button {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: none;
      border: none;
      border-radius: 5px;
      color: var(--white);
      transition: background 0.2s ease-in;
      padding: 12px 30px;

      & > span {
        font-size: var(--font-md);
        text-transform: uppercase;
      }

      & > svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }

      &:hover {
        background: var(--white-transparent);
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
}
</style>
