<script setup>
import { ref, onMounted, nextTick } from "vue";
import Loading from "@/components/Loading.vue";
const isLoad = ref(true);
onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      isLoad.value = false;
    }, 1500);
  });
});
</script>
<template>
  <Loading v-show="isLoad"></Loading>
  <router-view></router-view>
</template>
