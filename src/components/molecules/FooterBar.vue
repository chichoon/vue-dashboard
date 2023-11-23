<script setup lang="ts">
import LinkTextButton from '../atoms/LinkTextButton.vue';
import TextComponent from '../atoms/TextComponent.vue';
import { HeartIcon } from '../icons';
</script>

<template>
  <footer class="footer">
    <div class="footer__left">
      <LinkTextButton text="creative tim" />
      <LinkTextButton text="about us" />
      <LinkTextButton text="blog" />
      <LinkTextButton text="licenses" />
    </div>
    <div class="footer__right">
      <TextComponent text="© 2023 Creative Tim, made with" color="secondary" />
      <HeartIcon />
      <TextComponent text="for a better web" color="secondary" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  padding: 15px 30px;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & > div {
    flex: 1;
  }

  &__left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  &__right {
    text-align: end;
    color: var(--text-secondary);
    padding: 15px 0;

    & > svg {
      width: 15px;
      height: 15px;
      margin: 0 5px;
    }
  }
}
</style>
