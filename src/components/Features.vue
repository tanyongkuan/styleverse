<template>
  <div class="flex flex-col items-start gap-5 flex-grow">
    <IconPlaceholder>
      <heart-outline-icon class="w-6 h-6 text-indigo-500" />
    </IconPlaceholder>
    <span class="font-semibold text-xl text-neutral-900">{{ title }}</span>
    <span class="text-base text-neutral-500">{{ description }}</span>
  </div>
</template>
<script setup lang="ts">
import HeartOutlineIcon from 'vue-material-design-icons/HeartOutline.vue';
import IconPlaceholder from '@components/IconPlaceholder.vue';

type FeatureProps = {
  title: string;
  description: string;
};

withDefaults(defineProps<FeatureProps>(), {});
</script>
