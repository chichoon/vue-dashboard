<script setup lang="ts">
import { ref } from 'vue';
import { GaugeChart } from 'gauge-chart-library';

import Dashboard from '@/components/atoms/Dashboard';
import type { ColorType } from '@/types/common';
import ButtonComponent from '@/components/atoms/ButtonComponent.vue';

interface Props {
  color: ColorType;
}

const { color } = defineProps<Props>();

const gaugeValue = ref<number>(0);

const handleGetRandomValue = () => {
  gaugeValue.value = Math.floor(Math.random() * 100);
};

const handleAddValue = () => {
  if (gaugeValue.value >= 100) return;
  gaugeValue.value += 1;
};

const handleSubValue = () => {
  if (gaugeValue.value <= 0) return;
  gaugeValue.value -= 1;
};
</script>

<template>
  <section class="dashboard-gauge">
    <Dashboard.WrapperSection type="graph">
      <template #inner>
        <Dashboard.TopSection :color="color" type="graph">
          <template #top>
            <GaugeChart
              start-color="#ffffff50"
              end-color="#ffffffff"
              background-color="rgba(255, 255, 255, 0.3)"
              :value="gaugeValue"
              :max-value="100"
            />
          </template>
        </Dashboard.TopSection>
        <div class="dashboard-gauge__middle">
          <h4>Gauge Chart</h4>
          <div class="dashboard-gauge__button-wrapper">
            <ButtonComponent text="-1" :color="color" @click="handleSubValue" />
            <ButtonComponent text="Random Number" :color="color" @click="handleGetRandomValue" />
            <ButtonComponent text="+1" :color="color" @click="handleAddValue" />
          </div>
        </div>
      </template>
    </Dashboard.WrapperSection>
  </section>
</template>

<style scoped lang="scss">
.dashboard-gauge {
  padding: 0 15px;
  width: 100%;

  @media screen and (min-width: 1281px) {
    max-width: 33.33333%;
    min-width: 33.33333%;
    flex: 33.3333%;
  }

  &__middle {
    padding: 15px;

    & > h4 {
      font-size: var(--font-xl);
      color: var(--text-primary);
      margin-bottom: 5px;
    }
  }

  &__button-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
  }
}
</style>
