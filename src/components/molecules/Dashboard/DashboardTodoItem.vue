<script setup lang="ts">
import { provide, ref } from 'vue';

import Dashboard from '@/components/atoms/Dashboard';
import { TodoInjectionKey } from '@/injection/todo';
import type { DashboardColorType } from '@/types/common';
import { TODO_LIST, TODO_CATEGORIES } from './constants';

interface Props {
  color: DashboardColorType;
}

defineProps<Props>();

const selected = ref<number>(0);

const changeSelected = (index: number) => {
  selected.value = index;
};

provide(TodoInjectionKey, { selected, changeSelected });
</script>

<template>
  <section class="dashboard-item">
    <Dashboard.WrapperSection type="title">
      <template #inner>
        <Dashboard.TopSection :color="color" type="title">
          <template #top>
            <Dashboard.TodoTopSection :todoCategories="TODO_CATEGORIES" />
          </template>
        </Dashboard.TopSection>
        <Dashboard.TodoMiddleSection :todoList="TODO_LIST" />
      </template>
    </Dashboard.WrapperSection>
  </section>
</template>

<style scoped lang="scss">
.dashboard-item {
  padding: 0 15px;
  max-width: 100%;
  min-width: 100%;

  @media screen and (min-width: 1281px) {
    max-width: 50%;
    min-width: 50%;
    flex: 50%;
  }
}
</style>
