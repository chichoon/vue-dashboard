<script setup lang="ts">
import TextComponent from '../TextComponent.vue';

interface Props {
  bottomText?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="dashboard-bottom">
    <slot name="bottom-icon"></slot>
    <TextComponent v-if="!!bottomText" :text="bottomText" color="secondary" />
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
}

:slotted(.dashboard-bottom > svg) {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>
