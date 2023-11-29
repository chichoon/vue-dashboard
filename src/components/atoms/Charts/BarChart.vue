<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRef } from 'vue';

import { type ChartDataType } from '@/types/chart';
import { INIT_CHART, CHART_OPTIONS } from './barChart.constant';
import { timeoutInterval } from '@/utils/timeoutInterval';

const chartData = ref<ChartDataType>(INIT_CHART);
const series1Data = toRef<number[]>(chartData.value.data.series1);
const timeoutID = ref<number>(0);

function setRandomChartData() {
  series1Data.value.length = 0;
  for (let i = 0; i < 12; i++) {
    series1Data.value.push(Math.floor(Math.random() * 100));
  }
}

onMounted(() => {
  setRandomChartData();
  timeoutInterval(timeoutID, setRandomChartData);
});

onUnmounted(() => {
  clearTimeout(timeoutID.value);
});
</script>

<template>
  <ev-chart :data="chartData" :options="CHART_OPTIONS" />
</template>
