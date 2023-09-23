<script setup>
import { ref } from "vue";
const test = ref("test");
console.log(test);
</script>

<template>
  <div
    class="flex items-center justify-center fixed w-full h-full z-50 bg-black preloader"
  >
    <div class="relative">
      <div
        class="h-30 w-30 rounded-full border-t-8 border-b-8 border-gray-200"
      ></div>
      <img
        src="@/assets/svg/logo.svg"
        alt="logo"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[100px]"
      />
      <div
        class="absolute top-0 left-0 h-30 w-30 rounded-full border-t-8 border-b-8 border-primary-1 animate-spin"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
