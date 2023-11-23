<script setup lang="ts">
import { inject } from 'vue';

import { vRipple } from '@/directives';
import { type TodoCategoryType, type TodoInjectionType } from '@/types/todo';
import { TodoInjectionKey } from '@/injection/todo';
import TextComponent from '../TextComponent.vue';

interface Props {
  todoCategories: TodoCategoryType[];
}

defineProps<Props>();

const { changeSelected } = inject(TodoInjectionKey) as TodoInjectionType;
</script>

<template>
  <div class="dashboard-title">
    <TextComponent text="Tasks: " color="white" />
    <div class="dashboard-title__button-wrapper">
      <button
        v-for="(category, index) in todoCategories"
        @click="() => changeSelected(index)"
        :key="category.title"
        v-ripple
      >
        <component :is="category.icon" />
        <TextComponent :text="category.title" is-upper color="white" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;

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
