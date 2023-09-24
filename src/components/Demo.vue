<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import AOS from "aos";
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
import pc0 from "@/assets/img/pc/banner0.png";
import pc1 from "@/assets/img/pc/banner1.png";
import pc2 from "@/assets/img/pc/banner2.png";
import pc3 from "@/assets/img/pc/banner3.png";
import pc4 from "@/assets/img/pc/banner4.png";
const pcdemo = reactive([
  {
    img: pc0,
    name: "CQ9",
  },
  {
    img: pc1,
    name: "DS",
  },
  {
    img: pc2,
    name: "FC",
  },
  {
    img: pc3,
    name: "FC",
  },
  {
    img: pc3,
    name: "FC",
  },
  {
    img: pc4,
    name: "FC",
  },
]);
import m0 from "@/assets/img/h5/banner0.png";
import m1 from "@/assets/img/h5/banner1.png";
import m2 from "@/assets/img/h5/banner2.png";
import m3 from "@/assets/img/h5/banner3.png";
import m4 from "@/assets/img/h5/banner4.png";
const mdemo = reactive([
  {
    img: m0,
    name: "CQ9",
  },
  {
    img: m1,
    name: "DS",
  },
  {
    img: m2,
    name: "FC",
  },
  {
    img: m3,
    name: "FC",
  },
  {
    img: m3,
    name: "FC",
  },
  {
    img: m4,
    name: "FC",
  },
]);
onMounted(() => {
  AOS.init();
});
const demoType = ref(0);
</script>

<template>
  <section id="demo" class="about_style__two lg:pt-30 pt-24 relative z-1">
    <div class="container max-w-[1570px] mx-auto text-white">
      <div class="title mb-12" data-aos="fade-down">
        <h3 class="text-3xl text-center mb-2">演示站点</h3>
        <h5 class="text-sm text-center">
          任意挑选喜欢模版，进入内页可以看更多不同风格站点
        </h5>
      </div>
      <div
        class="w-4/5 relative mx-auto"
        data-aos="fade-up"
        v-if="demoType == 0"
      >
        <swiper
          class="swiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-watch-progress"
          :effect="'coverflow'"
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
          slides-per-view="auto"
          :coverflow-effect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }"
        >
          <swiper-slide
            class="swiper-slide pcside"
            v-for="(item, index) in pcdemo"
            :key="index"
          >
            <div class="game-box" @click="goClassPage(item.name)">
              <div class="game-img">
                <img :src="item.img" class="swiper-lazy" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="btn btnPrev"><img src="@/assets/img/prevbtn.png" /></div>
        <div class="btn btnNext"><img src="@/assets/img/nextbtn.png" /></div>
      </div>
      <div class="w-4/5 relative mx-auto" data-aos="fade-up" v-else>
        <swiper
          class="swiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-watch-progress"
          :effect="'coverflow'"
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
          slides-per-view="auto"
          :coverflow-effect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }"
        >
          <swiper-slide
            class="swiper-slide mside"
            v-for="(item, index) in mdemo"
            :key="index"
          >
            <div class="game-box" @click="goClassPage(item.name)">
              <div class="game-img">
                <img :src="item.img" class="swiper-lazy" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="btn btnPrev"><img src="@/assets/img/prevbtn.png" /></div>
        <div class="btn btnNext"><img src="@/assets/img/nextbtn.png" /></div>
      </div>
      <div class="btntab" data-aos="fade-up">
        <button
          :class="`${demoType == 0 ? 'active' : ''}`"
          @click="demoType = 0"
        >
          电脑端web
        </button>
        <button
          :class="`${demoType == 1 ? 'active' : ''}`"
          @click="demoType = 1"
        >
          手机端APP
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#demo {
  width: 100%;
  height: 100%;
  background: #17171b url(@/assets/img/bg3.png) no-repeat;
}
.pcside {
  text-align: center;
  position: relative;
  max-width: 863px;
  min-width: 863px;
  height: 685px;
}
.mside {
  max-width: 338px;
  min-width: 338px;
  height: 685px;
  text-align: center;
  position: relative;
}
.btn {
  cursor: pointer;
  position: absolute;
  width: 60px;
  top: 50%;
}
.btnPrev {
  left: -100px;
}
.btnNext {
  right: -100px;
}
.btntab {
  margin-top: 10px;
  padding-bottom: 40px;
  width: 100%;
  text-align: center;
  button {
    cursor: pointer;
    outline: none;
    border: none;
    width: 316px;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #6c7ba8;
    padding: 17px 0;
    background: linear-gradient(181.91deg, #ffffff 2.92%, #dbe7ff 99.7%);
    background: #17171b;
    border: 2px solid #cddeff;
    border: 2px solid #bd0507;
    // box-shadow: inset 0 -3px 4px rgba(175, 194, 230, 0.16), inset 0 1px 7px #fff;
    border-radius: 30px;
    color: #fff;
  }
  button:first-child {
    margin-right: 40px;
  }
  button.active {
    color: #fff;
    background: #6593ff;
    box-shadow: none;
    border-color: transparent;
    background: #bd0507;
    color: #fff;
  }
}
</style>
