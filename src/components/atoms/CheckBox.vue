<script setup lang="ts">
import { CheckIcon } from '../icons';

interface Props {
  isDone: boolean;
}

defineProps<Props>();
</script>

<template>
  <label class="checkbox">
    <CheckIcon v-if="isDone" />
    <input type="checkbox" :value="isDone" hidden />
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: inline-block;
  width: 20px;
  min-width: 20px;
  max-width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid var(--border-color);

  & > svg {
    width: 15px;
    height: 15px;
    color: var(--notification-primary);
  }
}
</style>
