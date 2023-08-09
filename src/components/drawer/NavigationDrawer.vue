<template>
  <div
    id="drawer-navigation"
    :class="[
      'fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-full dark:bg-gray-800',
      display ? '-translate-x-none' : '-translate-x-full'
    ]"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <div class="flex flex-col h-full">
      <div class="flex px-4 py-5 justify-between">
        <span class="text-xl font-semibold">StyleVerse</span>
        <ButtonFloating @click="closeDrawer">
          <window-close-icon />
        </ButtonFloating>
      </div>
      <div class="grow overflow-y-auto">
        <TheMenu :menuLinks="menuLinks" />
      </div>
      <Button
        text="Log in / Signup"
        class="bg-neutral-800 text-white py-5 text-center"
      />
    </div>
  </div>
  <div
    v-show="display"
    @click="closeDrawer"
    drawer-backdrop=""
    class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@components/buttons/Button.vue';
import ButtonFloating from '@components/buttons/ButtonFloating.vue';
import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue';
import TheMenu from '@components/menu/TheMenu.vue';
import { MenuItemType } from '@types/index';

export type NavigationDrawerInstance = {
  displayDrawer(): void;
};

const display = ref(false);
const menuLinks = ref<Array<MenuItemType>>([
  {
    label: 'Men',
    link: '/men'
  },
  {
    label: 'Woman',
    link: '/men'
  },
  {
    label: 'Jewellery',
    link: '/men'
  }
]);

const displayDrawer = () => (display.value = true);
const closeDrawer = () => (display.value = false);

const instance: NavigationDrawerInstance = { displayDrawer };
defineExpose(instance);
</script>
