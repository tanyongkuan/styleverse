<template>
  <li class="p-4 border-b border-neutral-400">
    <div @click="menuAction" class="flex justify-between items-center px-2">
      <span>{{ menuItem.label }}</span>
      <ButtonFloating
        v-if="menuItem.children && menuItem.children.length > 0"
        @click="menuAction"
      >
        <chevron-down-icon />
      </ButtonFloating>
    </div>
  </li>
  <ul id="dropdown-example" class="hidden py-2 space-y-2">
    <li v-for="(childItem, index) in menuItem.children" :key="index">
      <a
        :href="childItem.link"
        class="
          flex
          items-center
          w-full
          p-2
          text-gray-900
          transition
          duration-75
          rounded-lg
          pl-11
          group
          hover:bg-gray-100
          dark:text-white dark:hover:bg-gray-700
        "
        >{{ childItem.label }}</a
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuItemType } from '@types/index';
import ButtonFloating from '@components/buttons/ButtonFloating.vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import { useRouter } from 'vue-router';

type MenuItemProps = {
  menuItem: MenuItemType;
};

const props = withDefaults(defineProps<MenuItemProps>(), {});

const router = useRouter();

const displayChildren = ref(false);

const menuAction = () => {
  if (props.menuItem.link && props.menuItem.children?.length === 0) {
    router.push(props.menuItem.link);
  } else {
    displayChildren.value = true;
  }
};
</script>
