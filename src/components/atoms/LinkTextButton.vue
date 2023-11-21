<script setup lang="ts">
interface Props {
  to?: string;
  text: string;
}

defineProps<Props>();
</script>
<template>
  <RouterLink :to="to ?? ''" class="link-text">
    <span>{{ text }}</span>
  </RouterLink>
</template>

<style scoped lang="scss">
.link-text {
  display: block;
  padding: 15px;
  text-decoration: none;

  & > span {
    font-size: var(--font-sm);
    color: var(--text-primary);
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
      color: var(--notification-primary);
    }
  }
}
</style>
