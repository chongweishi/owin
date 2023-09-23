<script setup>
import { ref } from "vue";
const test = ref("test");
console.log(test);
</script>

<template>
  <div>{{ test }}</div>
</template>

<style lang="scss" scoped></style>
