<script setup lang="ts">
import { DashboardTitleItem } from '@/components/molecules/Dashboard';
import { UserFormPinia, UserFormVuex } from '@/components/molecules/UserForm';
import { UserInfoPinia, UserInfoVuex } from '@/components/molecules/UserInfo';
</script>

<template>
  <div class="user-view">
    <div class="user-view__area">
      <DashboardTitleItem
        class="user-view__form"
        color="success"
        title="Edit Profile With Vuex"
        subtitle="Complete your profile"
      >
        <template #bottom>
          <UserFormVuex />
        </template>
      </DashboardTitleItem>
      <UserInfoVuex />
    </div>
    <div class="user-view__area">
      <DashboardTitleItem
        class="user-view__form"
        color="info"
        title="Edit Profile With Pinia"
        subtitle="Complete your profile"
      >
        <template #bottom>
          <UserFormPinia />
        </template>
      </DashboardTitleItem>
      <UserInfoPinia />
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-view {
  width: 100%;
  padding: 30px 15px;

  &__area {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1281px) {
    &__form {
      min-width: 66.6666%;
      max-width: 66.6666%;
      width: 66.6666%;
    }
  }
}
</style>
