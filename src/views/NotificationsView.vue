<script setup lang="ts">
import TextComponent from '@/components/atoms/TextComponent.vue';
import { DashboardTitleItem } from '@/components/molecules/Dashboard';
</script>

<template>
  <div class="notifications-view">
    <DashboardTitleItem color="success" title="Notifications" subtitle="Handcrafted by us with ♥">
      <template #bottom>
        <div class="notifications-view__inner">
          <section class="notifications-view__section">
            <TextComponent text="Notifications Style" size="lg" />
          </section>
          <section class="notifications-view__section">
            <TextComponent text="Notifications states" size="lg" />
          </section>
        </div>
      </template>
    </DashboardTitleItem>
  </div>
</template>

<style scoped lang="scss">
.notifications-view {
  display: flex;
  flex-direction: column;
  padding: 30px 15px;

  &__inner {
    display: flex;
    flex-wrap: wrap;
  }

  & > section {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  &__section {
    padding: 0 15px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    @media screen and (min-width: 1281px) {
      width: 50%;
      min-width: 50%;
      max-width: 50%;
    }
  }
}
</style>
