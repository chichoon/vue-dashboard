<script setup lang="ts">
import { DashboardTitleItem } from '@/components/molecules/Dashboard';
import { UserFormVuex } from '@/components/molecules/UserForm';
import { UserInfoVuex } from '@/components/molecules/UserInfo';
</script>

<template>
  <main class="user-view">
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
  </main>
</template>

<style scoped lang="scss">
.user-view {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 15px;

  @media screen and (min-width: 1281px) {
    &__form {
      min-width: 66.6666%;
      max-width: 66.6666%;
      width: 66.6666%;
    }
  }
}
</style>
