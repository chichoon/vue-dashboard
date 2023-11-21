<script setup lang="ts">
interface Props {
  bottomText?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="dashboard-bottom">
    <slot name="bottom-icon"></slot>
    <span v-if="!!bottomText">{{ bottomText }}</span>
  </div>
</template>

<style scoped lang="scss">
.dashboard-bottom {
  min-height: 45px;
  background-color: var(--white);
  margin: 0 20px 0;
  padding: 10px 0;
  border-top: 1px solid var(--border-color);
  border-radius: 3px;
  color: var(--text-secondary);
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    font-size: var(--font-md);
  }
}

:slotted(.dashboard-bottom > svg) {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>
