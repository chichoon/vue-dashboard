<script setup lang="ts">
import { TriangleIcon } from '../icons';
import { ColorSelector, BackgroundSelector, SettingsSubText } from '../atoms/Settings';
import ButtonComponent from '../atoms/ButtonComponent.vue';
</script>

<template>
  <div class="settings-modal">
    <div class="settings-modal__inner">
      <ColorSelector />
      <BackgroundSelector />
      <div class="settings-modal__button-wrapper">
        <ButtonComponent color="success" text="FREE DOWNLOAD" />
        <ButtonComponent color="primary" text="DOCUMENTATION" />
      </div>
      <SettingsSubText text="Thank you for sharing!" />
    </div>
    <TriangleIcon />
  </div>
</template>

<style scoped lang="scss">
.settings-modal {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 10px;
  right: 60px;
  z-index: 5;

  &__inner {
    padding: 10px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);

    & > h5 {
      text-align: center;
      padding: 5px 2px;
      font-weight: 600;
      color: var(--text-primary);
      font-size: var(--font-sm);
      text-transform: uppercase;
    }
  }

  &__button-wrapper {
    display: flex;
    flex-direction: column;

    & > button {
      margin: 15px 0;
    }
  }

  & > svg {
    width: 30px;
    height: 30px;
    color: var(--white);
    margin-left: -10px;
    margin-top: 30px;
  }
}
</style>
