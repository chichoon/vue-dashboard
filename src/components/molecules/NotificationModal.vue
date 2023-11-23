<script setup lang="ts">
const NOTIF_LIST: string[] = [
  'Mike John responded to your email',
  'You have 5 new tasks',
  "You're now friend with Andrew",
  'Another Notification',
  'Another one'
];
</script>

<template>
  <ul class="notification-modal">
    <li v-for="notif of NOTIF_LIST" :key="notif">{{ notif }}</li>
  </ul>
</template>

<style scoped lang="scss">
.notification-modal {
  position: absolute;
  z-index: 6;
  top: 50px;
  right: 100px;
  border-radius: 3px;
  background-color: var(--white);
  padding: 5px;
  box-shadow: 0 2px 5px 0 var(--shadow-color);

  & > li {
    border-radius: 2px;
    color: var(--text-primary);
    padding: 10px 20px;
    font-size: var(--font-md);

    transition:
      background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1),
      box-shadow 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      color: var(--white);
      background-color: var(--notification-primary);
      box-shadow: 0 12px 20px -10px var(--notification-primary);
    }
  }
}
</style>
