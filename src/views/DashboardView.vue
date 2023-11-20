<script setup lang="ts">
import DashboardIconItem from '@/components/atoms/DashboardIconItem.vue';
import DashboardItem from '@/components/atoms/DashboardItem.vue';
import ClockIcon from '@/components/icons/ClockIcon.vue';
import InfoIcon from '@/components/icons/InfoIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
</script>

<template>
  <main class="dashboard-view">
    <DashboardItem color="success">
      <template #top>
        <div>hiisdfsdfsdfh</div>
      </template>
      <template #bottom>
        <div>asds</div>
      </template>
    </DashboardItem>
    <DashboardIconItem title="타이틀" text-primary="75" text-secondary="GB" color="info">
      <template #top-icon>
        <TwitterIcon />
      </template>
      <template #bottom>
        <ClockIcon />
      </template>
    </DashboardIconItem>
    <DashboardIconItem
      title="타이틀"
      text-primary="75"
      text-secondary="GB"
      bottom-text="asdasd"
      color="warning"
    >
      <template #top-icon>
        <InfoIcon />
      </template>
      <template #bottom-icon>
        <ClockIcon />
      </template>
    </DashboardIconItem>
  </main>
</template>

<style scoped lang="scss">
.dashboard-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
