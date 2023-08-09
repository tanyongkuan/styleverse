<template>
  <button
    type="button"
    class="
      p-3
      text-sm
      font-medium
      text-gray-900
      focus:outline-none
      bg-primary
      rounded-xl
      border border-gray-200
      cursor-pointer
    "
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
type ButtonProps = {
  text?: string;
};

withDefaults(defineProps<ButtonProps>(), {});
</script>
