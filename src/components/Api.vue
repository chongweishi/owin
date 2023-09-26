<script setup>
import { computed, ref } from "vue";
import i18n from "@/plugin/i18n";
const curType = ref(0);
const typeList = ref([
  {
    type: 0,
    name: i18n.t("common.api.menu0"),
  },
  {
    type: 1,
    name: i18n.t("common.api.menu1"),
  },
  {
    type: 2,
    name: i18n.t("common.api.menu2"),
  },
  {
    type: 3,
    name: i18n.t("common.api.menu3"),
  },
  {
    type: 4,
    name: i18n.t("common.api.menu4"),
  },
  {
    type: 5,
    name: i18n.t("common.api.menu5"),
  },
  {
    type: 6,
    name: i18n.t("common.api.menu6"),
  },
  {
    type: 7,
    name: i18n.t("common.api.menu7"),
  },
]);
const apiList = ref([
  {
    type: 1,
    image: "https://image.71yunduan.com/JILI-SLOT-002_EN.png",
    url: "https://www.baidu.com/",
  },
  {
    type: 2,
    image: "https://image.71yunduan.com/JILI-SLOT-004_EN.png",
    url: "https://www.baidu.com/",
  },
  {
    type: 3,
    image: "https://image.71yunduan.com/JILI-SLOT-005_EN.png",
    url: "https://www.baidu.com/",
  },
  {
    type: 4,
    image: "https://image.71yunduan.com/JILI-SLOT-010_EN.png",
    url: "https://www.baidu.com/",
  },
  {
    type: 5,
    image: "https://image.71yunduan.com/JILI-SLOT-014_EN.png",
    url: "https://www.baidu.com/",
  },
  {
    type: 6,
    image: "https://image.71yunduan.com/JILI-SLOT-026_EN.png",
    url: "https://www.baidu.com/",
  },
  {
    type: 7,
    image: "https://image.71yunduan.com/JILI-SLOT-028_EN.png",
    url: "https://www.baidu.com/",
  },
]);
const gameList = computed(() => {
  if (curType.value == 0) {
    return apiList.value;
  } else {
    const arr = apiList.value.filter((item) => item.type == curType.value);
    return arr;
  }
});
</script>

<template>
  <section id="api" class="about_style__two lg:pt-30 pt-24 relative z-1">
    <div class="container max-w-[1570px] mx-auto text-white pb-24">
      <div
        class="title pb-12 flex justify-start items-center"
        data-aos="fade-down"
      >
        <h3
          class="text-base md:text-xl lg:text-2xl xl:text-3xl text-center mb-2 mr-5"
        >
          游戏API
        </h3>
        <div class="gameMenu flex justify-between">
          <a
            href="javascript:void(0)"
            class="mr-3 text-xs md:text-base lg:text-base xl:text-base"
            :class="curType == item.type ? 'active' : ''"
            v-for="(item, index) in typeList"
            @click="curType = item.type"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-base">
        <div v-for="(item, index) in gameList" :key="index">
          <img :src="item.image" class="object-cover w-full h-full" />
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
  background: #17171b url(@/assets/img/bg3.png) no-repeat;
}
.gameItem {
  background: #1f1f1f;
}
.grid-cols-6 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.gameMenu a {
  color: #fff;
}
.gameMenu a.active {
  color: #bd0507;
}
</style>
