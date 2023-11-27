<script setup lang="ts">
import { ClockIcon } from '@/components/icons';
import type { ColorType } from '@/types/common';
import Dashboard from '@/components/atoms/Dashboard';

interface Props {
  color: ColorType;
  title: string;
  emphasisText?: string;
  commonText?: string;
  bottomText?: string;
}

const { color } = defineProps<Props>();
</script>

<template>
  <section class="dashboard-item">
    <Dashboard.WrapperSection type="graph">
      <template #inner>
        <Dashboard.TopSection :color="color" type="graph">
          <template #top>
            <slot name="top"></slot>
          </template>
        </Dashboard.TopSection>
        <Dashboard.GraphMiddleSection
          :title="title"
          :emphasis-text="emphasisText"
          :common-text="commonText"
        >
          <template #emphasis-text-icon>
            <slot name="emphasis-icon"></slot>
          </template>
        </Dashboard.GraphMiddleSection>

        <Dashboard.BottomSection :bottom-text="bottomText">
          <template #bottom-icon>
            <ClockIcon />
          </template>
        </Dashboard.BottomSection>
      </template>
    </Dashboard.WrapperSection>
  </section>
</template>

<style scoped lang="scss">
.dashboard-item {
  padding: 0 15px;
  width: 100%;

  @media screen and (min-width: 1281px) {
    max-width: 33.33333%;
    min-width: 33.33333%;
    flex: 33.3333%;
  }
}
</style>
