<script setup lang="ts">
import NotificationElement from '@/components/atoms/NotificationElement.vue';
import TextComponent from '@/components/atoms/TextComponent.vue';
import { BellIcon } from '@/components/icons';
import { DashboardTitleItem } from '@/components/molecules/Dashboard';
</script>

<template>
  <div class="notifications-view">
    <DashboardTitleItem color="success" title="Notifications" subtitle="Handcrafted by us with ♥">
      <template #bottom>
        <div class="notifications-view__inner">
          <section class="notifications-view__section">
            <TextComponent class="notifications-view__title" text="Notifications Style" size="lg" />
            <div class="notifications-view__wrapper">
              <NotificationElement color="info" text="This is a plain notification" />
              <NotificationElement
                color="info"
                text="This is a notification with close button."
                is-cancelable
              />
              <NotificationElement
                color="info"
                text="This is a notification with close button and icon."
                is-cancelable
              >
                <BellIcon />
              </NotificationElement>
              <NotificationElement
                color="info"
                text="This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
                is-cancelable
              >
                <BellIcon />
              </NotificationElement>
            </div>
          </section>
          <section class="notifications-view__section">
            <TextComponent
              class="notifications-view__title"
              text="Notifications states"
              size="lg"
            />
            <div class="notifications-view__wrapper">
              <NotificationElement
                color="info"
                bold-text="info - "
                text='This is a regular notification made with ".alert-info"'
                is-cancelable
              />
              <NotificationElement
                color="success"
                bold-text="success - "
                text='This is a regular notification made with ".alert-success"'
                is-cancelable
              />
              <NotificationElement
                color="warning"
                bold-text="warning - "
                text='This is a regular notification made with ".alert-warning"'
                is-cancelable
              />
              <NotificationElement
                color="danger"
                bold-text="danger - "
                text='This is a regular notification made with ".alert-danger"'
                is-cancelable
              />
              <NotificationElement
                color="primary"
                bold-text="primary - "
                text='This is a regular notification made with ".alert-primary"'
                is-cancelable
              />
            </div>
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

  &__title {
    margin: 10px 0 15px;
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

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
