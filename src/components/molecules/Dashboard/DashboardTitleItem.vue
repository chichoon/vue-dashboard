<script setup lang="ts">
import type { ColorType } from '@/types/common';
import Dashboard from '@/components/atoms/Dashboard';

interface Props {
  color: ColorType;
  title: string;
  subtitle: string;
}

const { color } = defineProps<Props>();
</script>

<template>
  <section class="dashboard-item">
    <Dashboard.WrapperSection type="title">
      <template #inner>
        <Dashboard.TopSection :color="color" type="title">
          <template #top>
            <Dashboard.TitleTopSection
              :title="title"
              :subtitle="subtitle"
            ></Dashboard.TitleTopSection>
          </template>
        </Dashboard.TopSection>

        <div class="dashboard-item__bottom">
          <slot name="bottom"></slot>
        </div>
      </template>
    </Dashboard.WrapperSection>
  </section>
</template>

<style scoped lang="scss">
.dashboard-item {
  padding: 0 15px;
  max-width: 100%;
  min-width: 100%;

  @media screen and (min-width: 1281px) {
    max-width: 50%;
    min-width: 50%;
    flex: 50%;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    margin: 25px 0;
    position: relative;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 3px;
    overflow: unset;
  }

  &__top {
    z-index: 2;
    margin: -20px 15px 0;
    padding: 15px;
    border-radius: 3px;
  }

  &__bottom {
    background-color: var(--white);
    padding: 15px;
    border-radius: 3px;
  }
}
</style>
