<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section id="story" class="about_style__two lg:pt-30 pt-24 relative z-1">
    <div class="container">
      <div class="grid lg:grid-cols-12 gap-base items-center">
        <div class="lg:col-span-6">
          <div class="inline-block p-base" data-aos="fade-right">
            <img src="@/assets/img/story-img.png" alt="about-image" />
          </div>
        </div>
        <div class="lg:col-span-6 text-white storycard" data-aos="fade-left">
          <h2 class="section-title-v2">品牌故事</h2>
          <p class="text-md leading-1.7 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo cons equat rem ipsum dolor sit amet.
            consectetur adipiscing elit. sed do eiusmod temporincididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <div class="mt-12">
            <a href="about.html" class="btn_primary__v1">More About</a>
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
