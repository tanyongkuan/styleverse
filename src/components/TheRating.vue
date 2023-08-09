<template>
  <div class="flex items-center">
    <svg
      v-for="n in 5"
      :key="n"
      :class="[
        'w-4 h-4 mr-1',
        { 'text-yellow-300': n <= rating, 'text-gray-300': n > rating }
      ]"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <linearGradient :id="`grad${n}`">
        <stop :offset="`${(rating - n + 1) * 100}%`" class="selectedRating" />
        <stop :offset="`${(n - rating) * 100}%`" class="unSelectedRating" />
      </linearGradient>
      <path
        :fill="n - rating < 1 && n - rating > 0 ? `url(#grad${n})` : undefined"
        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
      />
    </svg>
    <p
      class="
        flex
        gap-1
        ml-2
        text-sm
        font-medium
        text-gray-500
        dark:text-gray-400
      "
    >
      {{ rating }}
      <span v-if="$slots['rating']">|</span>
      <slot name="rating"></slot>
    </p>
  </div>
</template>
<script setup lang="ts">
type RatingProps = {
  rating: number;
};

withDefaults(defineProps<RatingProps>(), {});
</script>

<style scoped>
.selectedRating {
  --tw-text-opacity: 1;
  stop-color: rgb(253 224 71 / 1);
}

.unSelectedRating {
  --tw-text-opacity: 1;
  stop-color: rgb(209 213 219 / 1);
}
</style>
