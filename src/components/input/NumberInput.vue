<template>
  <div class="custom-number-input h-10 w-32 flex flex-col gap-1">
    <label
      v-if="placeholder"
      for="custom-input-number"
      class="w-full text-sm font-semibold"
      >{{ placeholder }}
    </label>
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
      <button
        @click="decrement"
        data-action="decrement"
        class="h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span class="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        class="
          outline-none
          focus:outline-none
          text-center
          w-full
          font-semibold
          text-base
          hover:text-black
          focus:text-black
          md:text-basecursor-default
          flex
          items-center
          text-gray-700
        "
        name="custom-input-number"
        :value="value"
      />
      <button
        @click="increment"
        data-action="increment"
        class="h-full w-20 rounded-r cursor-pointer"
      >
        <span class="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type NumberInputProps = {
  placeholder?: string;
  value: number;
};

const props = withDefaults(defineProps<NumberInputProps>(), {});

const emit = defineEmits<{
  (e: 'decrement'): void;
  (e: 'increment'): void;
}>();

const increment = () => emit('increment');

const decrement = () => emit('decrement');
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}
</style>
