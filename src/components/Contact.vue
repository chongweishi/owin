<script setup>
import { ref } from "vue";
const test = ref("test");
console.log(test);
</script>

<template>
  <section id="contact" class="about_style__two lg:pt-30 pt-24 relative z-1">
    <div class="container max-w-[1570px] mx-auto text-white">
      <div class="title mb-12" data-aos="fade-down">
        <h3
          class="text-base md:text-xl lg:text-2xl xl:text-3xl text-center mb-2"
        >
          {{ $t("common.contact.title") }}
        </h3>
        <h5 class="text-xs md:text-base lg:text-base xl:text-base text-center">
          {{ $t("common.contact.des") }}
        </h5>
      </div>
      <div class="list w-full relative h-auto md:h-164">
        <i class="line hidden md:block"></i>
        <div class="static md:absolute w-full">
          <div
            class="listbox mx-auto flex flex-col md:flex-row justify-between"
          >
            <div class="item">
              <div
                class="icon icon-phone flex items-center justify-center mx-auto w-16 h-16 xl:w-36 xl:h-36 lg:w-32 lg:h-32 md:w-28 md:h-28"
              >
                <img src="@/assets/img/step_icon_1.png" />
              </div>
              <p
                class="pt-4 text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                <span>01</span>
                {{ $t("common.contact.step1") }}
              </p>
            </div>
            <div class="item">
              <div
                class="icon icon-sign flex items-center justify-center mx-auto w-16 h-16 xl:w-36 xl:h-36 lg:w-32 lg:h-32 md:w-28 md:h-28"
              >
                <img src="@/assets/img/step_icon_2.png" />
              </div>
              <p
                class="pt-4 text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                <span>02</span>
                {{ $t("common.contact.step2") }}
              </p>
            </div>
            <div class="item">
              <div
                class="icon icon-talk flex items-center justify-center mx-auto w-16 h-16 xl:w-36 xl:h-36 lg:w-32 lg:h-32 md:w-28 md:h-28"
              >
                <img src="@/assets/img/step_icon_3.png" />
              </div>
              <p
                class="pt-4 text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                <span>03</span>
                {{ $t("common.contact.step3") }}
              </p>
            </div>
            <div class="item">
              <div
                class="icon icon-setting flex items-center justify-center mx-auto w-16 h-16 xl:w-36 xl:h-36 lg:w-32 lg:h-32 md:w-28 md:h-28"
              >
                <img src="@/assets/img/step_icon_4.png" />
              </div>
              <p
                class="pt-4 text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                <span>04</span>
                {{ $t("common.contact.step4") }}
              </p>
            </div>
            <div class="item">
              <div
                class="icon icon-tv flex items-center justify-center mx-auto w-16 h-16 xl:w-36 xl:h-36 lg:w-32 lg:h-32 md:w-28 md:h-28"
              >
                <img src="@/assets/img/step_icon_5.png" />
              </div>
              <p
                class="pt-4 text-xs md:text-base lg:text-base xl:text-base text-center"
              >
                <span>05</span>
                {{ $t("common.contact.step5") }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-wrap mt-24">
        <div class="contact text-center">
          <a
            href="https://t.me/KMBWVIP"
            target="_blank"
            class="contact-btn text-xs md:text-sm lg:text-1md xl:text-md"
          >
            {{ $t("common.contact.btn") }}
          </a>
        </div>
        <div
          class="footer-list container mx-auto w-full items-center justify-center mt-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-base"
        >
          <div class="footer-item flex items-center mr-12 mb-6">
            <img src="@/assets/img/icon-tg.png" class="mr-2" />
            <span class="text-xs md:text-sm lg:text-1md xl:text-md">
              <a href="https://t.me/KMBWVIP" target="_blank">@top10admin</a>
            </span>
          </div>
          <div
            class="footer-item flex items-center mr-12 mb-6"
            style="display: none"
          >
            <img src="@/assets/img/icon-whats.png" class="mr-2" />
            <span class="text-xs md:text-sm lg:text-1md xl:text-md">
              <span class="text">+63 912 888 8888</span>
            </span>
          </div>
          <div class="footer-item flex items-center mr-12 mb-6">
            <img src="@/assets/img/icon-email.png" class="mr-2" />
            <span class="text-xs md:text-sm lg:text-1md xl:text-md">
              <span class="text">top10gameeasy@gmail.come</span>
            </span>
          </div>
          <div class="footer-item flex items-center mb-6" style="display: none">
            <img src="@/assets/img/icon-tel.png" class="mr-2" />
            <span class="text-xs md:text-sm lg:text-1md xl:text-md">
              <span class="text">+63 912 888 8888</span>
            </span>
          </div>
        </div>
      </div>
      <div class="footer text-xs md:text-sm lg:text-1md xl:text-md">
        {{ $t("common.contact.copyright") }}
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url(./../assets/css/style.scss);
#contact {
  width: 100%;
  height: 100%;
  background: #17171b url(@/assets/img/bg4.png) no-repeat;
}
.list {
  // height: 164px;
}
.list .line {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 5px,
    rgba(154, 175, 189, 0.5) 0,
    rgba(154, 175, 189, 0.5) 13px,
    rgba(0, 0, 0, 0) 0
  );
}
.list .item {
  margin-bottom: 20px;
}

.list .item .icon {
  // position: absolute;
  // width: 140px;
  // height: fit-content;
  border: 1px solid #bd0507;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.2s ease;
  img {
    max-width: 50%;
  }
}
.contact-btn {
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  background: #bd0507;
  color: #fff;
  border-radius: 33px;
  box-shadow: 0 0 20px rgba(231, 4, 0, 0.5);
  padding: 1.6% 6%;
}
.footer {
  padding: 20px;
  // font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 20px;
}
</style>
