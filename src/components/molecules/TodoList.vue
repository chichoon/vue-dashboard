<script setup lang="ts">
import { inject } from 'vue';

import { type TodoInjectionType, type TodoType } from '@/types/todo';
import { TodoInjectionKey } from '@/injection/todo';
import TodoElement from '../atoms/TodoElement.vue';

interface Props {
  todoList: Record<string, TodoType[]>;
}

defineProps<Props>();

const { selected } = inject(TodoInjectionKey) as TodoInjectionType; // TODO: 타입 단언을 피할 수 있는 방법이 있을까?
</script>

<template>
  <div class="dashboard-middle">
    <div class="dashboard-middle__inner">
      <div
        class="dashboard-middle__todos"
        :style="`transform: translate3d(-${selected * 100}%, 0px, 0px);`"
      >
        <ul
          class="dashboard-middle__todo-list"
          v-for="(todos, index) in Object.values(todoList)"
          :key="index"
        >
          <TodoElement v-for="todo in todos" :todo="todo" :key="todo.title" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-middle {
  width: 100%;
  padding: 15px 20px;

  &__inner {
    width: 100%;
    overflow: hidden;
  }

  &__todos {
    width: 100%;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    flex-direction: row;
  }

  &__todo-list {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
}
</style>
