<script setup lang="ts">
import type { TableHeadersType } from '@/types/table';
import { TABLE_OPTIONS } from '@/utils/table.constant';

interface Props {
  tableData: (string | number)[][];
  tableHeadings: TableHeadersType[];
}

defineProps<Props>();
</script>

<template>
  <ev-grid :columns="tableHeadings" :rows="tableData" :option="TABLE_OPTIONS" />
</template>
