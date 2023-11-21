<script setup lang="ts">
import type { ColorType } from '@/types/common';
import Dashboard from '@/components/atoms/Dashboard';

interface Props {
  color: ColorType;
  title: string;
  textPrimary: string;
  textSecondary?: string;
  bottomText?: string;
}

const { color } = defineProps<Props>();
</script>

<template>
  <section class="dashboard-item">
    <Dashboard.WrapperSection type="icon">
      <template #inner>
        <Dashboard.TopSection :color="color" type="icon">
          <template #top>
            <slot name="top-icon"></slot>
          </template>
        </Dashboard.TopSection>
        <Dashboard.IconMiddleSection
          :title="title"
          :text-primary="textPrimary"
          :text-secondary="textSecondary" />
        <Dashboard.BottomSection :bottom-text="bottomText">
          <template #bottom-icon>
            <slot name="bottom-icon"></slot>
          </template> </Dashboard.BottomSection
      ></template>
    </Dashboard.WrapperSection>
  </section>
</template>

<style scoped lang="scss">
.dashboard-item {
  padding: 0 15px;
  max-width: 100%;
  min-width: 100%;

  @media screen and (min-width: 601px) {
    max-width: 50%;
    min-width: 50%;
    flex: 50%;
  }

  @media screen and (min-width: 1281px) {
    max-width: 25%;
    min-width: 25%;
    flex: 25%;
  }
}
</style>
