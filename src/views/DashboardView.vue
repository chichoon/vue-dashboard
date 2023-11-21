<script setup lang="ts">
import DashboardIconItem from '@/components/atoms/DashboardIconItem.vue';
import DashboardItem from '@/components/atoms/DashboardItem.vue';
import AlertIcon from '@/components/icons/AlertIcon.vue';
import CalendarIcon from '@/components/icons/CalendarIcon.vue';
import ClockIcon from '@/components/icons/ClockIcon.vue';
import InfoIcon from '@/components/icons/InfoIcon.vue';
import LabelIcon from '@/components/icons/LabelIcon.vue';
import StoreIcon from '@/components/icons/StoreIcon.vue';
import TimePastIcon from '@/components/icons/TimePastIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
</script>

<template>
  <main class="dashboard-view">
    <DashboardItem color="info">
      <template #top>
        <div>hiisdfsdfsdfh</div>
      </template>
      <template #bottom>
        <div>asds</div>
      </template>
    </DashboardItem>
    <DashboardItem color="danger">
      <template #top>
        <div>hiisdfsdfsdfh</div>
      </template>
      <template #bottom>
        <div>asds</div>
      </template>
    </DashboardItem>
    <DashboardItem color="success">
      <template #top>
        <div>hiisdfsdfsdfh</div>
      </template>
      <template #bottom>
        <div>asds</div>
      </template>
    </DashboardItem>
    <DashboardIconItem
      title="Revenue"
      text-primary="$34,245"
      bottom-text="Last 24 Hours"
      color="success"
    >
      <template #top-icon>
        <StoreIcon />
      </template>
      <template #bottom-icon>
        <CalendarIcon />
      </template>
    </DashboardIconItem>
    <DashboardIconItem
      title="Used Space"
      text-primary="49/50"
      text-secondary="GB"
      bottom-text="Get More Space..."
      color="warning"
    >
      <template #top-icon>
        <InfoIcon />
      </template>
      <template #bottom-icon>
        <AlertIcon />
      </template>
    </DashboardIconItem>
    <DashboardIconItem
      title="Fixed Issues"
      text-primary="75"
      bottom-text="Tracked from GitHub"
      color="danger"
    >
      <template #top-icon>
        <InfoIcon />
      </template>
      <template #bottom-icon>
        <LabelIcon />
      </template>
    </DashboardIconItem>
    <DashboardIconItem
      title="Followers"
      text-primary="+245"
      bottom-text="Just Updated"
      color="info"
    >
      <template #top-icon>
        <TwitterIcon />
      </template>
      <template #bottom-icon>
        <TimePastIcon />
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
