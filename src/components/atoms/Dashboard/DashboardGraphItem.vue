<script setup lang="ts">
import ClockIcon from '@/components/icons/ClockIcon.vue';
import type { DashboardColorType } from '@/types/common';
import { createLinearGradient } from '@/utils/createLinearGradient';

interface Props {
  color: DashboardColorType;
  title: string;
  bottomText?: string;
}

const { color } = defineProps<Props>();
</script>

<template>
  <section class="dashboard-item">
    <div class="dashboard-item__wrapper">
      <div
        class="dashboard-item__top"
        :style="`background: ${createLinearGradient(
          color
        )}; box-shadow: 0 12px 20px -10px var(--notification-${color});`"
      >
        <slot name="top"></slot>
      </div>

      <div class="dashboard-item__middle">
        <h4>{{ title }}</h4>
        <slot name="middle"></slot>
      </div>

      <div class="dashboard-item__bottom">
        <ClockIcon />
        <span v-if="!!bottomText">{{ bottomText }}</span>
      </div>
    </div>
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
    padding: 0;
    border-radius: 3px;
    min-height: 160px;
  }

  &__middle {
    background-color: var(--white);
    padding: 15px;
    border-radius: 3px;
  }

  &__bottom {
    min-height: 45px;
    background-color: var(--white);
    margin: 0 20px 0;
    padding: 10px 0;
    border-top: 1px solid var(--border-color);
    border-radius: 3px;
    color: var(--text-secondary);
    display: flex;
    flex-direction: row;
    align-items: center;

    & > span {
      font-size: var(--font-md);
    }

    & > svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
}
</style>
