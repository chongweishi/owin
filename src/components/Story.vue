<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section
    id="story"
    class="about_style__two lg:pt-30 pt-24 relative z-1 lg:pb-24 pb-20 lg:pt-[220px]"
  >
    <div class="container max-w-[1570px] mx-auto">
      <div class="grid lg:grid-cols-12 gap-base items-center">
        <div class="lg:col-span-6">
          <div class="inline-block p-base" data-aos="fade-right">
            <img src="@/assets/img/story-img.png" alt="about-image" />
          </div>
        </div>
        <div class="lg:col-span-6 text-white storycard" data-aos="fade-left">
          <h2 class="section-title-v2 text-2xl">品牌故事</h2>
          <p class="text-md leading-1.7 mt-5">
            TOP10包网项目立项于2013年，累计已发展10余年，累计服务客户上百+位，技术团队目前
            已有百位+ 24小时保障项目稳定运行。
            开发出60+个不同类型模版，满足市场70%的需求。如您更有想法市面模版无法满足您，从
            交互设计、界面设计到功能定制，我们提供全方位的解决方案，包括PC、H5和APP。
            提供中文、英文、泰文、越南文等多国语言版本，以及任意语言定制服务；采用纯原生技术
            开发，彻底解决充值资金丢失、流量劫持等问题，保障网站安全；BBIN、AG、MG等40多家
            国际游戏厂商，200多种游戏选择。
          </p>
          <div class="mt-12">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <h4 class="text-center text-3xl">10</h4>
                <span class="text-center">年</span>
                <p class="text-center">累计已发展</p>
              </div>
              <div class="flex flex-col">
                <h4 class="text-center text-3xl">100</h4>
                <span class="text-center">+</span>
                <p class="text-center">服务客户</p>
              </div>
              <div class="flex flex-col">
                <h4 class="text-center text-3xl">60</h4>
                <span class="text-center">+</span>
                <p class="text-center">不同类型模版</p>
              </div>
              <div class="flex flex-col">
                <h4 class="text-center text-3xl">40</h4>
                <span class="text-center">+</span>
                <p class="text-center">国际游戏厂商</p>
              </div>
              <div class="flex flex-col">
                <h4 class="text-center text-3xl">200</h4>
                <span class="text-center">+</span>
                <p class="text-center">游戏选择</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#story {
  width: 100%;
  height: 100%;
  background: url(@/assets/img/bg2.png) no-repeat;
}
.storycard {
  background: #1f1f1f;
  padding: 20px;
}
</style>
