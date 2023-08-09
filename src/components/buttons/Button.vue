<template>
  <button
    type="button"
    :class="[
      'flex items-center gap-1.5 py-2 px-4 text-sm font-medium border border-gray-200 text-gray-900 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10   dark:border-gray-600  dark:hover:text-white  dark:hover:bg-gray-700',
      { 'rounded-lg': rounded }
    ]"
  >
    <slot name="leftIcon" />
    <span class="w-full text-center">{{ text }}</span>
    <slot name="rightIcon" />
  </button>
</template>

<script setup lang="ts">
type ButtonProps = {
  text?: string;
  rounded?: boolean;
};

withDefaults(defineProps<ButtonProps>(), {
  rounded: false
});
</script>
