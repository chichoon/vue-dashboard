<script setup lang="ts">
import type { ColorType } from '@/types/common';
import type { TableDataType } from '@/types/table';

interface Props {
  color: ColorType;
  tableData: TableDataType[];
  tableHeadings: string[];
}

defineProps<Props>();
</script>

<template>
  <table class="table">
    <thead
      :class="[
        'table__head',
        { 'table__head--info': color === 'info' },
        { 'table__head--success': color === 'success' },
        { 'table__head--warning': color === 'warning' },
        { 'table__head--danger': color === 'danger' },
        { 'table__head--primary': color === 'primary' }
      ]"
    >
      <tr>
        <th v-for="heading in tableHeadings" :key="heading">{{ heading }}</th>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr v-for="data in tableData" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.name }}</td>
        <td>${{ data.salary.toLocaleString() }}</td>
        <td>{{ data.country }}</td>
        <td>{{ data.city }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.table {
  width: 100%;

  & tr {
    border-bottom: 1px solid var(--border-color);
  }

  &__head {
    &--info {
      color: var(--notification-info);
    }
    &--success {
      color: var(--notification-success);
    }
    &--warning {
      color: var(--notification-warning);
    }
    &--primary {
      color: var(--notification-primary);
    }
    &--info {
      color: var(--notification-info);
    }

    & th {
      text-transform: uppercase;
      font-size: var(--font-lg);
      padding-left: 8px;
      padding-right: 32px;
      text-align: start;
    }
  }

  &__body {
    & > tr {
      transition: background-color 0.2s ease-in;

      & > td {
        padding: 12px 8px;
        font-size: var(--font-md);
        color: var(--text-primary);
      }

      &:hover {
        background-color: var(--black-transparent);
      }
    }
  }
}
</style>
