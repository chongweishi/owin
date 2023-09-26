<script setup>
import { ref } from "vue";
import i18n from "@/plugin/i18n";
import { getAssetsFile } from "@/utils";
import AdPrice from "@/components/AdPrice.vue";
import AdLang from "@/components/AdLang.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
const modules = ref([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
]);
const list = ref([
  {
    index: 0,
    num: "01",
    title: i18n.t("common.advantage.title1"),
    description: i18n.t("common.advantage.des1"),
    image: "img/advantage/banner0.png",
  },
  {
    index: 1,
    num: "02",
    title: i18n.t("common.advantage.title2"),
    description: "i18n.t('common.advantage.des2')",
    image: "img/advantage/banner1.png",
  },
  {
    index: 2,
    num: "03",
    title: i18n.t("common.advantage.title3"),
    description: i18n.t("common.advantage.des3"),
    image: "img/advantage/banner2.png",
  },
  {
    index: 3,
    num: "04",
    title: i18n.t("common.advantage.title4"),
    description: "",
    image: "",
  },
]);
const tabindex = ref(0);
const changeIndex = (index) => {
  tabindex.value = index;
};
</script>

<template>
  <section
    id="advantage"
    class="about_style__two lg:pt-30 pt-24 pb-0 md:pb-0 lg:pb-24 relative z-1"
  >
    <div class="container max-w-[1570px] mx-auto text-white">
      <div class="title mb-12" data-aos="fade-down">
        <h3
          class="text-base md:text-xl lg:text-2xl xl:text-3xl text-center mb-2"
        >
          {{ $t("common.advantage.title") }}
        </h3>
        <h5 class="text-xs md:text-base lg:text-base xl:text-base text-center">
          {{ $t("common.advantage.des") }}
        </h5>
      </div>
      <div
        class="feature-tab hidden lg:grid lg:grid-cols-12 gap-base items-center"
      >
        <ul class="tab-section lg:col-span-6">
          <li
            class="feature-item"
            v-for="(item, index) in list"
            :key="index"
            :class="tabindex == item.index ? 'active' : ''"
            @click="changeIndex(item.index)"
          >
            <img src="@/assets/img/advantage/tabbg.png" class="outline1" />
            <span class="index">{{ item.num }}</span>
            <span class="divider"></span>
            <span class="title">{{ item.title }}</span>
          </li>
        </ul>
        <ul class="tab-content lg:col-span-6">
          <li
            class="feature-content"
            v-for="(item, index) in list"
            :class="tabindex == item.index ? 'active' : ''"
            :key="index"
          >
            <AdLang v-if="tabindex == 2"></AdLang>
            <AdPrice v-else-if="tabindex == 3"></AdPrice>
            <template v-else>
              <figure class="image-section">
                <img
                  class="img-responsive loadded unblur"
                  height="192px"
                  width="326px"
                  :src="getAssetsFile(item.image)"
                />
                <div class="img-loading"></div>
              </figure>
              <p
                class="desc text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                {{ item.description }}
              </p>
            </template>
          </li>
        </ul>
      </div>
      <div class="block lg:hidden">
        <div v-for="(item, index) in list" :key="index" class="card mb-6">
          <h1 class="text-base text-center mt-6 mb-6">{{ item.title }}</h1>
          <div class="tab-content">
            <template v-if="item.index == 2">
              <AdLang></AdLang>
            </template>
            <template v-else-if="item.index == 3">
              <AdPrice></AdPrice>
            </template>

            <template v-else>
              <figure class="image-section2">
                <img
                  class="img-responsive loadded unblur"
                  height="192px"
                  width="326px"
                  :src="getAssetsFile(item.image)"
                />
                <div class="img-loading"></div>
              </figure>
              <p
                class="desc2 text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                {{ item.description }}
              </p>
            </template>
          </div>
        </div>

        <!-- <swiper
          class="swiper"
          :effect="'fade'"
          :modules="modules"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :navigation="{
            nextEl: '.btnNext',
            prevEl: '.btnPrev',
          }"
          :pagination="false"
          :scrollbar="false"
          :centered-slides="true"
          slides-per-view="1"
        >
          <swiper-slide
            class="swiper-slide mside"
            v-for="(item, index) in list"
            :key="index"
          >
            <template v-if="item.index == 2">
              <AdLang></AdLang>
            </template>
            <template v-else-if="item.index == 3">
              <AdPrice></AdPrice>
            </template>

            <template v-else>
              <figure class="image-section2">
                <img
                  class="img-responsive loadded unblur"
                  height="192px"
                  width="326px"
                  :src="getAssetsFile(item.image)"
                />
                <div class="img-loading"></div>
              </figure>
              <p
                class="desc2 text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                {{ item.description }}
              </p>
            </template>
          </swiper-slide>
        </swiper> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url(./../assets/css/style.scss);
#advantage {
  width: 100%;
  height: 100%;
  background: #08080a url(@/assets/img/bg2.png) no-repeat;
}
.feature-tab {
  margin-top: 112px;
  /* display: flex; */
  max-width: 100%;
  align-items: center;
}
.feature-tab .tab-section {
  width: 502px;
}
.feature-tab .tab-section .feature-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 60px;
  cursor: pointer;
}
.feature-tab .tab-section .feature-item .outline1 {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 54px;
  width: 56px;
}
.feature-tab .tab-section .feature-item .index {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #555;
  margin-left: 20px;
}
.feature-tab .tab-section .feature-item .divider {
  width: 16px;
  height: 2px;
  background: #555;
  position: relative;
  display: flex;
  margin: 0 24px 0 40px;
}
.feature-tab .tab-section .feature-item .divider:after {
  content: "";
  height: 8px;
  width: 8px;
  background: #555;
  position: absolute;
  right: -4px;
  top: -4px;
  transform: rotate(45deg);
}
.feature-tab .tab-section .feature-item .title {
  font-weight: 700;
  color: #555;
  font-size: 18px;
  line-height: 24px;
}
.feature-tab .tab-section .feature-item.active .index {
  color: #fff;
}
.feature-tab .tab-section .feature-item.active .title {
  font-size: 24px;
  line-height: 28px;
  color: #fff;
}
.feature-tab .tab-section .feature-item.active .outline1 {
  opacity: 1;
  height: auto;
}
.feature-tab .tab-section .feature-item.active .divider,
.feature-tab .tab-section .feature-item.active .divider:after {
  background: #bd0507;
}

.feature-tab .tab-content {
  flex: 1;
}

.feature-tab .tab-content .feature-content {
  display: none;
  max-height: 508px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.feature-tab .tab-content .feature-content.active {
  display: flex;
}

.feature-tab .tab-content .feature-content .title {
  display: none;
}

.feature-tab .tab-content .feature-content .image-section {
  position: relative;
  width: 100%;
}

.feature-tab .tab-content .feature-content .image-section .img-loading {
  background-color: transparent;
}

.feature-tab
  .tab-content
  .feature-content
  .image-section
  .img-loading
  .svg-icon {
  z-index: 9;
}

.feature-tab .tab-content .feature-content .image-section:after {
  background: linear-gradient(225deg, #2f2f2f 16.66%, #1f1f1f 16.67%);
  border: 1px solid #3f3f3f;
  content: "";
  left: 0;
  bottom: 0;
  max-height: 305px;
  height: 90%;
  border-radius: 12px;
  position: absolute;
  right: 0;
}

.feature-tab .tab-content .feature-content .image-section img {
  height: auto;
  width: 100%;
  position: relative;
  z-index: 1;
  -o-object-fit: cover;
  object-fit: cover;
  padding: 0 18%;
}

.feature-tab .tab-content .feature-content .desc {
  font-weight: 400;
  line-height: 36px;
  color: #fff;
  max-width: 678px;
  margin: 0;
}
.image-section2 {
  position: relative;
  width: 100%;
}

.image-section2 .img-loading {
  background-color: transparent;
}

.image-section2 .img-loading .svg-icon {
  z-index: 9;
}

.image-section2:after {
  background: linear-gradient(225deg, #2f2f2f 16.66%, #1f1f1f 16.67%);
  border: 1px solid #3f3f3f;
  content: "";
  left: 0;
  bottom: 0;
  max-height: 305px;
  height: 90%;
  border-radius: 12px;
  position: absolute;
  right: 0;
}

.image-section2 img {
  height: auto;
  width: 100%;
  position: relative;
  z-index: 1;
  -o-object-fit: cover;
  object-fit: cover;
  padding: 0 18%;
}

.desc2 {
  font-weight: 400;
  line-height: 20px;
  color: #fff;
  max-width: 678px;
  margin: 0;
  text-align: left;
  opacity: 0.7;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card {
  background: #121212;
  padding: 10px;
  border-radius: 10px;
}
</style>
