<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<template>
  <h5 class="sub-text">{{ text }}</h5>
</template>

<style scoped lang="scss">
.sub-text {
  text-align: center;
  padding: 5px 2px;
  font-weight: 600;
  color: var(--text-primary);
  font-size: var(--font-sm);
  text-transform: uppercase;
}
</style>
