<script setup>
import { ref } from "vue";
</script>

<template>
  <section id="price" class="about_style__two lg:pt-30 pt-24 relative z-1">
    <div class="container max-w-[1570px] mx-auto text-white">
      <div class="title mb-12" data-aos="fade-down">
        <h3 class="text-3xl text-center mb-2">
          {{ $t("common.price.title") }}
        </h3>
        <h5 class="text-sm text-center">{{ $t("common.price.des") }}</h5>
      </div>
      <div
        class="con-main-wrap wow bounceInUp list-5"
        style="visibility: visible"
      >
        <div class="list-item">
          <div
            class="item-top"
            style="
              background: linear-gradient(225deg, #0f0f0f 3%, #000000 100%);
            "
          >
            <span>{{ $t("common.price.kbf") }}</span>
            <p>4W</p>
            <span class="tip"></span>
          </div>
          <div
            class="item-con"
            style="
              background: linear-gradient(232deg, #1f1f1f 0%, #1f1f1f 100%);
            "
          >
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.kbf1") }}</p>
            </div>
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.kbf2") }}</p>
            </div>
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.kbf3") }}</p>
            </div>
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.kbf4") }}</p>
            </div>
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.kbf5") }}</p>
            </div>
          </div>
        </div>
        <div class="list-step">
          <img src="@/assets/img/add.png" alt="" class="img-step" />
        </div>
        <div class="list-item">
          <div
            class="item-top"
            style="
              background: linear-gradient(225deg, #242424 3%, #151515 100%);
            "
          >
            <span>{{ $t("common.price.ywhf") }}</span>
            <p>4W</p>
            <span class="tip"></span>
          </div>
          <div
            class="item-con"
            style="
              background: linear-gradient(232deg, #2d2d2d 0%, #2d2d2d 100%);
            "
          >
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.ywhf1") }}</p>
            </div>
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.ywhf2") }}</p>
            </div>
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.ywhf3") }}</p>
            </div>
            <div class="text-item">
              <img src="@/assets/img/gou.png" alt="" class="img-check" />
              <p>{{ $t("common.price.ywhf4") }}</p>
            </div>
          </div>
        </div>
        <div class="list-step">
          <img src="@/assets/img/equal.png" alt="" class="img-step" />
        </div>
        <div class="list-item list-final">
          <div
            class="item-top"
            style="
              background: linear-gradient(207deg, #bd0507 0%, #bd0507 100%);
            "
          >
            <span>{{ $t("common.price.zzfy") }}</span>
            <p>8W</p>
            <span class="tip"></span>
          </div>
          <div class="item-final">
            <img src="@/assets/img/price-img.png" alt="" class="icon-price" />
            <h4>{{ $t("common.price.zzfy1") }}</h4>
            <p>{{ $t("common.price.zzfy2") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#price {
  width: 100%;
  height: 100%;
  background: #17171b url(@/assets/img/bg3.png) no-repeat;
}
.con-main-wrap {
  width: 74.29rem;
  margin: 0 auto;
}
.con-main-wrap {
  margin-top: 1.85742rem;
  padding-bottom: 3.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: relative;
}
.con-main-wrap .list-item {
  width: 23.52738rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  background: linear-gradient(180deg, #fbfcff 0, #fff 10%, #fff 100%);
  border-radius: 0.24761rem;
}
.con-main-wrap .list-step {
  position: absolute;
  top: 2.72425rem;
  left: 21.66996rem;
}
.con-main-wrap.list-5 .list-final {
  flex: 1;
}
.con-main-wrap .list-item .item-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  padding-top: 1.23832rem;
  width: 100%;
  height: 11.14453rem;
  background: linear-gradient(225deg, #809dca 3%, #c3d4ec 100%);
}
.con-main-wrap .list-item .item-top span {
  font-size: 1.48593rem;
  font-weight: 600;
  color: #fff;
}
.con-main-wrap .list-item .item-top p {
  font-size: 3.09574rem;
  font-weight: 600;
  color: #fff;
}
.con-main-wrap .list-item .item-top .tip {
  font-weight: 400;
}
.con-main-wrap .list-item .item-con {
  flex: 1;
  width: 100%;
  padding: 1.85742rem 1.23832rem 1.23832rem;
  background: linear-gradient(232deg, #e4efff 0, #fff 100%);
}
.con-main-wrap .list-item .item-con .text-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1.23832rem;
  word-wrap: break-word;
  white-space: pre-wrap;
}
.con-main-wrap .list-item .item-con .text-item .img-check {
  width: 1.23832rem;
  margin-right: 1.23832rem;
  position: relative;
  top: 0.30955rem;
}
.con-main-wrap .list-item .item-con p {
  font-size: 1.11445rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
}
.con-main-wrap .list-step .img-step {
  width: 3.83871rem;
  height: 3.83871rem;
}
.con-main-wrap .list-item .item-final {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.47652rem 1.23832rem;
}
.con-main-wrap .list-item .item-final .icon-price {
  width: 9.2871rem;
  margin-bottom: 0.6191rem;
}
.con-main-wrap .list-item .item-final h4 {
  width: 14.85937rem;
  font-size: 1.23832rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #1d2129;
  text-align: center;
}
.con-main-wrap .list-item .item-final p {
  line-height: 1.67173rem;
  color: #1d2129;
}
.con-main-wrap .list-step:nth-child(4) {
  left: 45.19722rem;
}
</style>
