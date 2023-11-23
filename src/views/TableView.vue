<script setup lang="ts">
import { DashboardTitleItem } from '@/components/molecules/Dashboard';
import GridTable from '@/components/molecules/GridTable.vue';
import { TABLE_HEADERS, TABLE_DATA } from '@/utils/table.constant';
</script>

<template>
  <div class="table-view">
    <DashboardTitleItem
      color="success"
      title="Simple Table"
      subtitle="Here is a subtitle for this table"
    >
      <template #bottom>
        <GridTable color="success" :table-data="TABLE_DATA" :table-headings="TABLE_HEADERS" />
      </template>
    </DashboardTitleItem>
    <DashboardTitleItem
      color="success"
      title="Table on Plain Background"
      subtitle="Here is a subtitle for this table"
    >
      <template #bottom>
        <GridTable color="success" :table-data="TABLE_DATA" :table-headings="TABLE_HEADERS" />
      </template>
    </DashboardTitleItem>
  </div>
</template>

<style scoped lang="scss">
.table-view {
  display: flex;
  flex-direction: column;
  padding: 30px 15px;

  & > section {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
}
</style>

<style lang="scss">
.table-view > section:last-child > .dashboard-wrapper {
  background-color: transparent;
  box-shadow: none;

  & > .dashboard-item__bottom {
    background-color: transparent;
  }
}
</style>
