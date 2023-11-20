<script setup lang="ts">
import { createLinearGradient } from '@/utils/createLinearGradient';

interface Props {
  color: 'info' | 'success' | 'warning' | 'danger' | 'primary';
  title: string;
  textPrimary: string;
  textSecondary?: string;
  bottomText?: string;
}

const { color } = defineProps<Props>();
</script>

<template>
  <section class="dashboard-item">
    <div class="dashboard-item__wrapper">
      <div
        class="dashboard-item__icon"
        :style="`background: ${createLinearGradient(
          color
        )}; box-shadow: 0 12px 20px -10px var(--notification-${color});`"
      >
        <slot name="top-icon"></slot>
      </div>
      <div class="dashboard-item__top">
        <h4>{{ title }}</h4>
        <div class="dashboard-item__text">
          <span>{{ textPrimary }}</span>
          <span v-if="!!textSecondary">{{ textSecondary }}</span>
        </div>
      </div>
      <div class="dashboard-item__bottom">
        <slot name="bottom-icon"></slot>
        <span v-if="!!bottomText">{{ bottomText }}</span>
      </div>
    </div>
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
  }

  &__wrapper {
    background-color: var(--white);
    margin: 25px 0;
    position: relative;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    border-radius: 3px;
    overflow: unset;
  }

  &__icon {
    float: left;
    z-index: 2;
    margin: -20px 15px 0;
    padding: 0;
    border-radius: 3px;
    width: 86px;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__top {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    height: 84px;

    & > h4 {
      text-align: end;
      color: var(--text-secondary);
      font-size: var(--font-md);
    }
  }

  &__text {
    height: fit-content;
    text-align: end;

    & > span {
      color: var(--text-primary);
      font-size: var(--font-xxl);
      font-weight: 300;
    }

    & > span:nth-child(2) {
      margin-left: 5px;
      font-size: var(--font-lg);
    }
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
  }
}

:slotted(.dashboard-item__icon > svg) {
  width: 35px;
  height: 35px;
  color: var(--white);
}

:slotted(.dashboard-item__bottom > svg) {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>
