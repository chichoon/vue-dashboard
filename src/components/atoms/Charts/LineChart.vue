<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRef } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

import type { ChartDataType } from '@/types/chart';
import { CHART_OPTIONS, INIT_CHART } from '@/utils/lineChart.constant';

const chartData = ref<ChartDataType>(INIT_CHART);

const series1Data = toRef<number[]>(chartData.value.data.series1);
const labels = toRef<Dayjs[]>(chartData.value.labels);
const intervalID = ref<number>(-1);
const timeValue = ref<Dayjs>(dayjs());

function addRandomChartData() {
  series1Data.value.push(Math.floor(Math.random() * 100));
  labels.value.push(timeValue.value);
  timeValue.value = timeValue.value.add(1, 'second');

  if (series1Data.value.length > 60) {
    series1Data.value.shift();
    labels.value.shift();
  }
}

onMounted(() => {
  for (let i = 0; i < 60; i++) addRandomChartData();
  intervalID.value = setInterval(addRandomChartData, 1000);
});

onUnmounted(() => {
  clearInterval(intervalID.value);
});
</script>

<template>
  <ev-chart :data="chartData" :options="CHART_OPTIONS" />
</template>

<style scoped lang="scss"></style>
