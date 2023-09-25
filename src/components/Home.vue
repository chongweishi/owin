<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section
    id="home"
    class="relative flex items-center justify-center h-screen overflow-hidden"
  >
    <video
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      src="@/assets/video/bg.mp4"
      draggable="true"
      class="absolute z-1 w-auto min-w-full min-h-full max-w-none object-cover"
    ></video>
    <div class="bgmask"></div>
    <div class="bg-bottom h-12 md:h--[220px] lg:h-[200px]"></div>
    <div class="container absolute z-1">
      <div
        class="max-w-[850px] mx-auto text-center text-white relative lg:pb-24 pb-20 lg:pt-[220px] pt-36"
      >
        <h1
          class="xl:text-7xl lg:text-4xl md:text-2xl text-2xl font-semibold leading-1.2"
          data-aos="fade-down"
        >
          <span class="animation__char_come_long">
            {{ $t("common.home.h1") }}
            <font class="font-theme">包网</font>
          </span>
        </h1>
        <p
          class="text-xs md:text-sm lg:text-1md xl:text-md mt-4 leading-1.7"
          data-aos="fade-up"
        >
          全球API十大品牌供应商，由顶尖500人开发团队历经10年打造，是您可靠的合作伙伴和安全后盾。
        </p>
        <div class="lg:mt-30 mt-7" data-aos="fade-up">
          <a
            href="package-details.html"
            class="contact-btn text-xs md:text-sm lg:text-1md xl:text-md"
          >
            联系我们
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url(./../assets/css/style.scss);
.bgmask {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.8)
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4RkZBQTgzNzg1NzExRTU4NTQyODc3OUM4MTZGMUREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI4RkZBQTg0Nzg1NzExRTU4NTQyODc3OUM4MTZGMUREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjhGRkFBODE3ODU3MTFFNTg1NDI4Nzc5QzgxNkYxREQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjhGRkFBODI3ODU3MTFFNTg1NDI4Nzc5QzgxNkYxREQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz66uHInAAAAIUlEQVR42mL5//8/AyMj42YGIGBigABfEMEIkoEBgAADAKvuBwVS8BAjAAAAAElFTkSuQmCC);
  z-index: 1;
  background-size: 3px 3px;
}
.bg-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  background: url(@/assets/img/bg-bottom.png) no-repeat;
  z-index: 3;
  background-size: cover;
}
.contact-btn {
  width: 232px;
  height: 66px;
  line-height: 66px;
  text-align: center;
  display: block;
  margin: 0 auto;
  background: #bd0507;
  color: #fff;
  font-size: 20px;
  border-radius: 33px;
  box-shadow: 0 0 20px rgba(231, 4, 0, 0.5);
}
</style>
