<template>
  <div class="flex flex-col gap-2 m-2 w-full">
    <div class="grid grid-cols-2 gap-2">
      <div
        className="flex gap-2 items-center justify-center overflow-hidden h-96 bg-no-repeat bg-cover bg-center"
        :style="{ backgroundImage: `url(${menPath})` }"
      >
        <Button
          text="Men"
          class="bg-white"
          @click="router.push('/category/men')"
        />
      </div>
      <div
        className="flex gap-2 items-center justify-center overflow-hidden h-96 bg-no-repeat bg-cover bg-center"
        style="
          background-image: url('https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600');
        "
      >
        <Button
          text="Women"
          class="bg-white"
          @click="router.push('/category/women')"
        />
      </div>
    </div>
    <div
      className="flex gap-2 items-center justify-center overflow-hidden h-96 bg-no-repeat bg-cover bg-center"
      :style="{ backgroundImage: `url(${accessoriesPath})` }"
    >
      <Button
        text="Jewelry"
        class="bg-white"
        @click="router.push(`/category/jewelry`)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@components/buttons/Button.vue';
import { useRouter } from 'vue-router';
import accessoriesPath from 'src/assets/accessories.png';
import menPath from 'src/assets/men.jpeg';

const router = useRouter();
</script>
