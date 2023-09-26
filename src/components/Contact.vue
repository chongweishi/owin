<script setup>
import { ref } from "vue";
const test = ref("test");
console.log(test);
</script>

<template>
  <section id="contact" class="about_style__two lg:pt-30 pt-24 relative z-1">
    <div class="container max-w-[1570px] mx-auto text-white">
      <div class="title mb-12" data-aos="fade-down">
        <h3 class="text-3xl text-center mb-2">
          {{ $t("common.contact.title") }}
        </h3>
        <h5 class="text-sm text-center">{{ $t("common.contact.des") }}</h5>
      </div>
      <div class="list w-full relative">
        <i class="line"></i>
        <div class="absolute w-full">
          <div class="listbox w-4/5 mx-auto flex justify-between">
            <div class="item">
              <div class="icon icon-phone flex items-center justify-center">
                <img src="@/assets/img/step_icon_1.png" />
              </div>
              <p class="pt-4 text-center">
                <span>01</span>
                {{ $t("common.contact.step1") }}
              </p>
            </div>
            <div class="item">
              <div class="icon icon-sign flex items-center justify-center">
                <img src="@/assets/img/step_icon_2.png" />
              </div>
              <p class="pt-4 text-center">
                <span>02</span>
                {{ $t("common.contact.step2") }}
              </p>
            </div>
            <div class="item">
              <div class="icon icon-talk flex items-center justify-center">
                <img src="@/assets/img/step_icon_3.png" />
              </div>
              <p class="pt-4 text-center">
                <span>03</span>
                {{ $t("common.contact.step3") }}
              </p>
            </div>
            <div class="item">
              <div class="icon icon-setting flex items-center justify-center">
                <img src="@/assets/img/step_icon_4.png" />
              </div>
              <p class="pt-4 text-center">
                <span>04</span>
                {{ $t("common.contact.step4") }}
              </p>
            </div>
            <div class="item">
              <div class="icon icon-tv flex items-center justify-center">
                <img src="@/assets/img/step_icon_5.png" />
              </div>
              <p class="pt-4 text-center">
                <span>05</span>
                {{ $t("common.contact.step5") }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-wrap mt-24">
        <div class="contact">
          <a href="https://t.me/KMBWVIP" target="_blank" class="contact-btn">
            {{ $t("common.contact.btn") }}
          </a>
        </div>
        <div class="footer-list w-full flex items-center justify-center mt-24">
          <div class="footer-item flex items-center mr-12">
            <img src="@/assets/img/icon-tg.png" class="mr-2" />
            <span>
              <a href="https://t.me/KMBWVIP" target="_blank">@KMBWVIP</a>
            </span>
          </div>
          <div class="footer-item flex items-center mr-12">
            <img src="@/assets/img/icon-whats.png" class="mr-2" />
            <span><span class="text">+63 912 888 8888</span></span>
          </div>
          <div class="footer-item flex items-center mr-12">
            <img src="@/assets/img/icon-email.png" class="mr-2" />
            <span><span class="text">888@TOP10.Game</span></span>
          </div>
          <div class="footer-item flex items-center">
            <img src="@/assets/img/icon-tel.png" class="mr-2" />
            <span><span class="text">+63 912 888 8888</span></span>
          </div>
        </div>
      </div>
      <div class="footer">{{ $t("common.contact.copyright") }}</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#contact {
  width: 100%;
  height: 100%;
  background: #17171b url(@/assets/img/bg4.png) no-repeat;
}
.list {
  height: 164px;
}
.list .line {
  display: block;
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

.list .item .icon {
  // position: absolute;
  width: 140px;
  height: 140px;
  border: 1px solid #bd0507;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.2s ease;
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
  box-shadow: 0 0 20px rgba(231, 4, 0, 50%);
}
.footer {
  padding: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 20px;
}
// .list .item {
//   position: relative;
//   z-index: 2;
//   padding-top: 147px;
//   white-space: nowrap;
// }
// .list .item .icon {
//   position: absolute;
//   width: 140px;
//   height: 140px;
//   left: 50%;
//   top: 0;
//   margin-left: -70px;
//   box-shadow: 0 14px 24px 0 #f5f5f5;
//   border: 1px solid #a1c2fb;
//   background-color: #fff;
//   border-radius: 50%;
//   transition: all 0.2s ease;
// }
// .list .item .icon:before,
// .list .item .icon:after {
//   content: "";
//   width: 76px;
//   height: 70px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   background-repeat: no-repeat;
//   background-position: 50%;
//   margin-left: -38px;
//   margin-top: -35px;
// }
// .list .item .icon.icon-phone:before {
//   margin-left: -35px;
//   background-image: url(/step_icon_1.1b3207cf.svg);
// }
// .list .item .icon.icon-phone:after {
//   margin-left: -35px;
//   background-image: url(/step_icon_1_hover.c15ec47b.svg);
// }
// .list .item p {
//   margin-top: 33px;
//   height: 20px;
//   font-size: 18px;
//   line-height: 1.11;
//   text-align: center;
//   color: #4f5064;
//   display: flex;
//   align-items: center;
// }
// .list .item p span {
//   padding-right: 7px;
//   font-family: DINPro;
//   font-size: 24px;
//   font-weight: 500;
//   color: #4f5064;
// }
// .contact-wrap {
//   height: 26%;
// }
// .contact {
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   flex-direction: column;
// }
// .contact-btn {
//   display: block;
//   margin: 29px auto 0;
//   width: 232px;
//   height: 66px;
//   line-height: 65px;
//   border-radius: 6px;
//   font-size: 20px;
//   text-align: center;
//   cursor: pointer;
//   color: #fff;
//   background: url(/btn@2x.ed5bb2ad.png) no-repeat 50%;
//   background-size: 100%;
// }
// .contact-wrap .contact-btn {
//   margin-top: 0.5%;
// }
// .footer-list {
//   position: relative;
//   height: 100%;
//   z-index: 5;
// }
// .footer-list,
// .footer-list .footer-item {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .footer-list {
//   height: 30px;
//   width: 100%;
//   margin-top: 45px;
// }
// .footer-list .footer-item {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .footer-list .footer-item {
//   margin-right: 50px;
//   color: #fff;
// }
// .footer-list .footer-item img,
// .footer-list .footer-item object,
// .footer-list .footer-item svg {
//   margin-right: 10px;
//   height: 24px;
// }
// .footer-list .footer-item a {
//   font-size: 18px;
//   color: #4f5064;
// }
</style>
