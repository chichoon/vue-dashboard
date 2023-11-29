<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRef } from 'vue';

import { type HeatMapChartDataType, type HeatMapChartInnerDataType } from '@/types/chart';
import { CHART_OPTIONS, INIT_CHART, X_LABELS, Y_LABELS } from './heatMapChart.constant';
import { timeoutInterval } from '@/utils/timeoutInterval';

const chartData = ref<HeatMapChartDataType>(INIT_CHART);
const series1Data = toRef<HeatMapChartInnerDataType[]>(chartData.value.data.series1);
const timeoutID = ref<number>(-1);

function setRandomChartData() {
  series1Data.value.length = 0;
  for (const xLabel of X_LABELS) {
    for (const yLabel of Y_LABELS) {
      series1Data.value.push({ x: xLabel, y: yLabel, value: Math.floor(Math.random() * 500) });
    }
  }
}

onMounted(() => {
  setRandomChartData();
  timeoutInterval(timeoutID, setRandomChartData);
});

onUnmounted(() => {
  clearInterval(timeoutID.value);
});
</script>

<template>
  <ev-chart :data="chartData" :options="CHART_OPTIONS" />
</template>
