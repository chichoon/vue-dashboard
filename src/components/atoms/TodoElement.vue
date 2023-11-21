<script setup lang="ts">
import { ref } from 'vue';

import { PencilIcon, CancelIcon } from '@/components/icons';
import type { TodoType } from '@/types/todo';
import CheckBox from './CheckBox.vue';

interface Props {
  todo: TodoType;
}

const props = defineProps<Props>();

const isDone = ref<boolean>(props.todo.isDone);

const handleClickDone = () => {
  isDone.value = !isDone.value;
};
</script>

<template>
  <li :class="['dashboard-todo', { 'dashboard-todo--done': isDone }]">
    <button @click="handleClickDone" class="dashboard-todo__wrapper">
      <CheckBox :is-done="isDone" />
      <span>{{ todo.title }}</span>
    </button>
    <div class="dashboard-todo__button-wrapper">
      <button><PencilIcon /></button>
      <button><CancelIcon /></button>
    </div>
  </li>
</template>

<style scoped lang="scss">
.dashboard-todo {
  width: 100%;
  padding: 12px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.2s ease-in;

  &--done,
  &:hover {
    background-color: var(--black-transparent);
  }

  &:last-child {
    border-bottom: none;
  }

  &__wrapper {
    flex: 1;
    border: none;
    background: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > span {
      font-size: var(--font-md);
      color: var(--text-primary);
      text-align: start;
      margin: 0 10px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__button-wrapper {
    display: flex;
    flex-direction: row;

    & > button {
      background: none;
      border: none;

      & > svg {
        width: 20px;
        height: 20px;
      }

      &:first-child > svg {
        color: var(--notification-primary);
      }

      &:last-child > svg {
        color: var(--notification-danger);
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
