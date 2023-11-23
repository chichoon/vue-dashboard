<script setup lang="ts">
import TextComponent from '@/components/atoms/TextComponent.vue';
import { DashboardTitleItem } from '@/components/molecules/Dashboard';
import type { ColorType, FontSizeType } from '@/types/common';

const FONT_SIZE: FontSizeType[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const COLORS: ColorType[] = ['success', 'info', 'primary', 'warning', 'danger'];
</script>

<template>
  <div class="typography-view">
    <DashboardTitleItem
      color="success"
      title="Material Dashboard Heading"
      subtitle="Created using Roboto Font Family"
    >
      <template #bottom>
        <ul class="typography-view__list">
          <li v-for="size in FONT_SIZE" :key="size">
            <TextComponent :text="`Header-${size}`" size="sm" color="secondary" />
            <TextComponent text="The Life of Material Dashboard" :size="size" />
          </li>
          <li v-for="color in COLORS" :key="color">
            <TextComponent :text="color" size="sm" color="secondary" />
            <TextComponent text="The Life of Material Dashboard" :color="color" />
          </li>
        </ul>
      </template>
    </DashboardTitleItem>
  </div>
</template>

<style scoped lang="scss">
.typography-view {
  display: flex;
  flex-direction: column;
  padding: 30px 15px;

  & > section {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  &__list {
    & > li {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 20px;

      & > span:first-child {
        display: inline-block;
        width: 100px;
      }
    }
  }
}
</style>
