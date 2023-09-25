<script setup>
import { ref } from "vue";
const curType = ref(0);
const gameType = ref([
  {
    id: 0,
    name: "全部",
  },
  {
    id: 1,
    name: "真人",
  },
  {
    id: 2,
    name: "电子",
  },
  {
    id: 3,
    name: "体育",
  },
  {
    id: 4,
    name: "棋牌",
  },
  {
    id: 5,
    name: "彩票",
  },
  {
    id: 6,
    name: "捕鱼",
  },
  {
    id: 7,
    name: "运动",
  },
]);
</script>

<template>
  <section id="api" class="about_style__two lg:pt-30 pt-24 relative z-1">
    <div class="container max-w-[1570px] mx-auto text-white">
      <div
        class="title pb-12 flex justify-start items-center"
        data-aos="fade-down"
      >
        <h3 class="text-3xl text-center mb-2 mr-5">游戏API</h3>
        <div class="gameMenu flex justify-between">
          <a href="javascript:void(0)" class="mr-3">全部</a>
          <a href="javascript:void(0)" class="mr-3">真人</a>
          <a href="javascript:void(0)" class="mr-3">电子</a>
          <a href="javascript:void(0)" class="mr-3">体育</a>
          <a href="javascript:void(0)" class="mr-3">棋牌</a>
          <a href="javascript:void(0)" class="mr-3">彩票</a>
          <a href="javascript:void(0)" class="mr-3">捕鱼</a>
          <a href="javascript:void(0)" class="mr-3">运动</a>
        </div>
      </div>
      <div
        class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-base pb-24"
      >
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/AG.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/Allbet.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/bbin.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/BG.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/BL.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/BoBao.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/BTI.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/CMD368.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/CQ9.jpg" />
        </div>
        <div class="group/card h-80 grid gameItem items-center">
          <img src="@/assets/img/partner/DG.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url(./../assets/css/style.scss);
#api {
  width: 100%;
  height: 100%;
  background: url(@/assets/img/bg2.png) no-repeat;
}
.gameItem {
  background: #1f1f1f;
}
.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
</style>
