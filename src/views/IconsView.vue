<script setup lang="ts">
import IconComponent from '@/components/atoms/IconComponent.vue';
import { DashboardTitleItem } from '@/components/molecules/Dashboard';
import { ICON_LIST } from '@/components/molecules/GNB/constants';
import type { IconType } from '@/types/common';

const ICON_KEYS: IconType[] = Object.keys(ICON_LIST) as IconType[];
</script>

<template>
  <div class="icons-view">
    <DashboardTitleItem
      color="success"
      title="Material Design Icons"
      subtitle="from https://www.svgrepo.com"
    >
      <template #bottom>
        <div class="icons-view__list">
          <IconComponent
            v-for="iconName in ICON_KEYS"
            :key="iconName"
            :icon="ICON_LIST[iconName]"
            :name="iconName"
          />
        </div>
      </template>
    </DashboardTitleItem>
  </div>
</template>

<style scoped lang="scss">
.icons-view {
  display: flex;
  flex-direction: column;
  padding: 30px 15px;

  & > section {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
