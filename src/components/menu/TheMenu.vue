<template>
  <ul>
    <MenuItem
      v-for="(menuLink, index) in menuLinks"
      :key="index"
      :menu-item="menuLink"
    />
  </ul>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import { MenuItemType } from '@types/index';

type MenuProps = {
  menuLinks: Array<MenuItemType>;
};

withDefaults(defineProps<MenuProps>(), {});
</script>
