<template>
  <div class="relative inline-block buttonDropdown">
    <Button text="Filter" class="bg-white">
      <template #rightIcon>
        <chevron-down-icon />
      </template>
    </Button>
    <!-- Dropdown menu -->
    <div class="pt-2">
      <div
        :class="[
          'dropdownHover z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44  absolute right-0'
        ]"
      >
        <ul
          class="text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          <li v-for="option in options" :key="option.name">
            <span
              class="
                block
                p-4
                hover:bg-gray-100
                dark:hover:text-white
                cursor-pointer
              "
              @click="option.action"
              >{{ option.name }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import Button from './Button.vue';
import { DropdownItem } from '@types/index';

type ButtonDropdownProps = {
  options: Array<DropdownItem>;
};

withDefaults(defineProps<ButtonDropdownProps>(), {});
</script>
<style scoped>
.buttonDropdown:hover .dropdownHover {
  display: block;
}
</style>
