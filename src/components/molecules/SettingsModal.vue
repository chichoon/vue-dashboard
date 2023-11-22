<script setup lang="ts">
import { TriangleIcon } from '../icons';
import { ColorSelector } from '../atoms/Settings';
</script>

<template>
  <div class="settings-modal">
    <div class="settings-modal__inner">
      <ColorSelector />
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
