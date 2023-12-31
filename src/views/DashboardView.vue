<script setup lang="ts">
import {
  DashboardIconItem,
  DashboardGraphItem,
  DashboardTitleItem,
  DashboardTodoItem,
  DashboardGaugeChartItem
} from '@/components/molecules/Dashboard';
import {
  AlertIcon,
  ArrowIcon,
  CalendarIcon,
  CopyIcon,
  InfoIcon,
  LabelIcon,
  StoreIcon,
  TimePastIcon,
  TwitterIcon
} from '@/components/icons';
import { LineChart, BarChart, HeatMapChart } from '@/components/atoms/Charts';
import GridTable from '@/components/molecules/GridTable.vue';
import { TABLE_HEADERS, TABLE_DATA } from '@/utils/table.constant';
</script>

<template>
  <div class="dashboard-view">
    <DashboardGraphItem
      title="Daily Sales"
      emphasis-text="55% "
      common-text="increase in today sales."
      color="info"
      bottom-text="updated 4 minutes ago"
    >
      <template #top><LineChart /></template>
      <template #emphasis-icon><ArrowIcon /></template>
    </DashboardGraphItem>
    <DashboardGraphItem
      title="Email Subscription"
      common-text="Last Campaign Performance"
      color="danger"
      bottom-text="updated 10 days ago"
    >
      <template #top><BarChart /></template>
    </DashboardGraphItem>
    <DashboardGraphItem
      title="Completed Tasks"
      common-text="Last Campaign Performance"
      color="success"
      bottom-text="campaign sent 26 minutes ago"
    >
      <template #top><HeatMapChart /></template>
    </DashboardGraphItem>
    <DashboardGaugeChartItem color="info" />
    <DashboardGaugeChartItem color="warning" />
    <DashboardGaugeChartItem color="success" />
    <DashboardIconItem
      title="Revenue"
      text-primary="$34,245"
      bottom-text="Last 24 Hours"
      color="success"
    >
      <template #top-icon>
        <StoreIcon />
      </template>
      <template #bottom-icon>
        <CalendarIcon />
      </template>
    </DashboardIconItem>
    <DashboardIconItem
      title="Used Space"
      text-primary="49/50"
      text-secondary="GB"
      bottom-text="Get More Space..."
      color="warning"
    >
      <template #top-icon>
        <CopyIcon />
      </template>
      <template #bottom-icon>
        <AlertIcon />
      </template>
    </DashboardIconItem>
    <DashboardIconItem
      title="Fixed Issues"
      text-primary="75"
      bottom-text="Tracked from GitHub"
      color="danger"
    >
      <template #top-icon>
        <InfoIcon />
      </template>
      <template #bottom-icon>
        <LabelIcon />
      </template>
    </DashboardIconItem>
    <DashboardIconItem
      title="Followers"
      text-primary="+245"
      bottom-text="Just Updated"
      color="info"
    >
      <template #top-icon>
        <TwitterIcon />
      </template>
      <template #bottom-icon>
        <TimePastIcon />
      </template>
    </DashboardIconItem>
    <DashboardTitleItem
      title="Employees Stats"
      subtitle="New employees on 15th September, 2016"
      color="warning"
    >
      <template #bottom>
        <GridTable color="warning" :table-data="TABLE_DATA" :table-headings="TABLE_HEADERS" />
      </template>
    </DashboardTitleItem>
    <DashboardTodoItem color="success" />
  </div>
</template>

<style scoped lang="scss">
.dashboard-view {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 15px;
}
</style>
