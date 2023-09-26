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
    class="about_style__two lg:pt-30 pt-24 relative z-1 pb-0 md:pb-0 lg:pb-24 lg:pt-[220px]"
  >
    <div class="container max-w-[1570px] mx-auto">
      <div class="grid lg:grid-cols-12 gap-base items-center">
        <div class="lg:col-span-6">
          <div class="inline-block p-base" data-aos="fade-right">
            <img src="@/assets/img/story-img.png" alt="about-image" />
          </div>
        </div>
        <div class="lg:col-span-6 text-white storycard" data-aos="fade-left">
          <h2
            class="section-title-v2 text-base md:text-xl lg:text-2xl xl:text-3xl"
          >
            {{ $t("common.story.title") }}
          </h2>
          <p
            class="text-md leading-1.7 mt-5 text-xs md:text-base lg:text-base xl:text-base opacity-75"
          >
            {{ $t("common.story.des1") }}
            <br />
            {{ $t("common.story.des2") }}
            <br />
            {{ $t("common.story.des3") }}
          </p>
          <div class="mt-12">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <h4
                  class="text-center text-base md:text-xl lg:text-2xl xl:text-3xl"
                >
                  {{ $t("common.story.stat1num") }}
                </h4>
                <span
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat1unit") }}
                </span>
                <p
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat1name") }}
                </p>
              </div>
              <div class="flex flex-col">
                <h4
                  class="text-center text-base md:text-xl lg:text-2xl xl:text-3xl"
                >
                  {{ $t("common.story.stat2num") }}
                </h4>
                <span
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat2unit") }}
                </span>
                <p
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat2name") }}
                </p>
              </div>
              <div class="flex flex-col">
                <h4
                  class="text-center text-base md:text-xl lg:text-2xl xl:text-3xl"
                >
                  {{ $t("common.story.stat3num") }}
                </h4>
                <span
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat2unit") }}
                </span>
                <p
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat3name") }}
                </p>
              </div>
              <div class="flex flex-col">
                <h4
                  class="text-center text-base md:text-xl lg:text-2xl xl:text-3xl"
                >
                  {{ $t("common.story.stat4num") }}
                </h4>
                <span
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat2unit") }}
                </span>
                <p
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat4name") }}
                </p>
              </div>
              <div class="flex flex-col">
                <h4
                  class="text-center text-base md:text-xl lg:text-2xl xl:text-3xl"
                >
                  {{ $t("common.story.stat5num") }}
                </h4>
                <span
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat2unit") }}
                </span>
                <p
                  class="text-center text-xs md:text-base lg:text-base xl:text-base opacity-50"
                >
                  {{ $t("common.story.stat5name") }}
                </p>
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
