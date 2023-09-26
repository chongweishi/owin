<script setup>
import { ref, onMounted, onBeforeUnmount, reactive, computed } from "vue";
import i18n from "@/plugin/i18n";
import useCommoStore from "@/store/common";
import { getAssetsFile } from "@/utils";
const store = useCommoStore();
const curLang = computed(() => store.curLang);
const langs = computed(() => store.langs);

const emit = defineEmits(["changeType"]);
const changeType = (val) => {
  emit("changeType", val);
};
const props = defineProps({
  currentIndex: {
    type: Number,
  },
});
const showMenu = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 10) {
      showMenu.value = true;
    } else {
      showMenu.value = false;
    }
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
const nav = ref([
  {
    index: 0,
    title: i18n.t("common.menu.home"),
  },
  {
    index: 1,
    title: i18n.t("common.menu.story"),
  },
  {
    index: 2,
    title: i18n.t("common.menu.demo"),
  },
  {
    index: 3,
    title: i18n.t("common.menu.advantage"),
  },
  {
    index: 4,
    title: i18n.t("common.menu.api"),
  },
  {
    index: 5,
    title: i18n.t("common.menu.partner"),
  },
  {
    index: 6,
    title: i18n.t("common.menu.contact"),
  },
]);
// const curLang = ref({
//   key: "zh_chs",
//   name: "简体中文",
//   shortName: "CN",
//   image: "img/lang/lang-cn.png",
// });
// const langs = ref([
//   {
//     zh_chs: {
//       key: "zh_chs",
//       name: "简体中文",
//       shortName: "CN",
//       image: "img/lang/lang-cn.png",
//     },
//     zh_cht: {
//       key: "zh_cht",
//       name: "繁體中文",
//       shortName: "TW",
//       image: "img/lang/lang-hg.png",
//     },
//     en: {
//       key: "en",
//       name: "English",
//       shortName: "EN",
//       image: "img/lang/lang-en.png",
//     },
//     vn: {
//       key: "vn",
//       name: "Tiếng Việt",
//       shortName: "VN",
//       image: "img/lang/lang-vn.png",
//     },
//     pt: {
//       key: "pt",
//       name: "Português",
//       shortName: "PT",
//       image: "img/lang/lang-pt.png",
//     },
//     es: {
//       key: "es",
//       name: "Español",
//       shortName: "ES",
//       image: "img/lang/lang-es.png",
//     },
//   },
// ]);
const changeLang = (data) => {
  store.setLang(data);
  // curLang.value = data;
  // localStorage.setItem("curLangKey", data.key);
  // window.location.reload();
};
const show = ref(false);
const showlang = ref(false);
</script>

<template>
  <header
    class="absolute header-style herder-variant-two top-0 left-0 w-full z-10"
    :class="showMenu ? 'sticky' : ''"
  >
    <div
      class="desktop-menu max-w-[1570px] mx-auto justify-center items-center xl:flex hidden"
    >
      <div class="main-menu flex items-center uppercase">
        <div class="menu-one">
          <ul class="flex items-center nav-list">
            <template v-for="(item, index) in nav" :key="index">
              <li v-if="item.index < 5">
                <a
                  href="javascript:void(0)"
                  class="nav-link"
                  :class="currentIndex == item.index ? 'font-theme' : ''"
                  @click="changeType(item.index)"
                >
                  {{ item.title }}
                </a>
              </li>
            </template>
          </ul>
        </div>
        <a href="index.html" class="shrink-0 xl:mx-9 mx-7">
          <img src="@/assets/svg/logo.svg" alt="logo" />
        </a>
        <div class="menu-one">
          <ul class="flex items-center nav-list">
            <template v-for="(item, index) in nav" :key="index">
              <li v-if="item.index >= 5">
                <a
                  href="javascript:void(0)"
                  class="nav-link"
                  :class="currentIndex == item.index ? 'font-theme' : ''"
                  @click="changeType(item.index)"
                >
                  {{ $t(item.title) }}
                </a>
              </li>
            </template>
            <li class="group/step-one">
              <a
                href="javascript:void(0)"
                class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200 nav-link"
              >
                <span class="ml-2">{{ $t("common.menu.lang") }}</span>
              </a>
              <ul class="nav-dropdown">
                <li>
                  <a
                    href="javascript:void(0)"
                    v-for="(item, index) in langs"
                    class="flex items-center"
                    :class="item.key == curLang.key ? 'font-theme' : ''"
                    :key="index"
                    @click="changeLang(item)"
                  >
                    <img
                      :src="getAssetsFile(item.image)"
                      class="inline-block align-middle w-5 mr-2"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="show = true"
                class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200"
              >
                <span class="ml-2 mr-2">{{ $t("common.menu.menu") }}</span>
                <button class="hamburger" id="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="mobile-menu xl:hidden flex justify-between items-center relative"
    >
      <a href="index.html" class="shrink-0 max-w-[100px]">
        <img src="@/assets/svg/logo.svg" alt="logo" />
      </a>

      <div class="space-x-4 flex items-center">
        <!-- <a
        href="javascript:void(0)"
          class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200"
        >
          <span class="ml-2">{{ $t("common.menu.lang") }}</span>
        </a> -->
        <a
          href="javascript:void(0)"
          class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200 nav-link relative"
          @click="showlang = !showlang"
        >
          <span class="ml-2">{{ $t("common.menu.lang") }}</span>
          <ul class="nav-dropdown" :class="showlang ? 'showlang' : ''">
            <li>
              <a
                href="javascript:void(0)"
                v-for="(item, index) in langs"
                class="flex items-center"
                :class="item.key == curLang.key ? 'font-theme' : ''"
                :key="index"
                @click="changeLang(item)"
              >
                <img
                  :src="getAssetsFile(item.image)"
                  class="inline-block align-middle w-5 mr-2"
                />
                {{ item.name }}
              </a>
            </li>
          </ul>
        </a>

        <a
          href="javascript:void(0)"
          @click="show = true"
          class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200"
        >
          <span class="ml-2 mr-2">{{ $t("common.menu.menu") }}</span>
          <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </a>
      </div>
    </div>
  </header>
  <article class="menu" :class="show ? 'show' : ''">
    <b class="_b"></b>
    <!--menubox background-color is 選單的底色-->
    <div class="menubox" style="background-color: rgba(0, 0, 0, 0.7)">
      <!--border-color is 關閉icon框線顏色，裡面的span顏色為叉叉顏色，此部分請抓同一個顏色欄位 -->
      <a
        class="lb_close menu_close"
        href="javascript:void(0);"
        @click="show = false"
        style="border-color: #e70400"
      >
        <div>
          <span style="background: #e70400"></span>
          <span style="background: #e70400"></span>
        </div>
      </a>
      <!--border 邊框不能換色!! -->
      <div class="border">
        <div>
          <img class="tl" src="@/assets/img/line.png" alt="" />
          <span class="borderT"></span>
          <span class="borderL"></span>
          <span class="borderR"></span>
          <span class="borderD"></span>
          <img class="br" src="@/assets/img/line.png" alt="" />
        </div>
      </div>
      <!--data-pcolor="一開始看到的字的顏色" ; data-hoverbg="li hover 時背景顏色" ; data-hovercolor="li hover 時字的顏色" -->
      <div
        class="listbox"
        data-pcolor="rgba(255, 255, 255, .4)"
        data-hoverbg="#e70400"
        data-hovercolor="#fff"
      >
        <img src="@/assets/svg/logo.svg" alt="logo" />
        <ul itemtype="http://schema.org/SiteNavigationElement">
          <li itemprop="name" v-for="(item, index) in nav" :key="index">
            <a
              itemprop="url"
              class="cg"
              href="javascript:void(0)"
              @click="
                changeType(item.index);
                show = false;
              "
              style="color: rgba(255, 255, 255, 0.4)"
            >
              <p>{{ item.title }}</p>
            </a>
          </li>
        </ul>
        <!--data-color="一開始看到的顏色" ; data-hcolor="hover 時 i的顏色" ;-->
        <div class="menusharebox">
          <div data-color="#e70400" data-hcolor="#fff">
            <a
              href="http://www.youtube.com/c/BBINOfficial "
              target="_blank"
              style="color: rgb(231, 4, 0); border-color: rgb(231, 4, 0)"
            >
              <i class="icon-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/bbinofficial/"
              target="_blank"
              style="color: rgb(231, 4, 0); border-color: rgb(231, 4, 0)"
            >
              <i class="icon-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import url(./../assets/css/style.scss);
.nav-dropdown {
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0px;
  z-index: 10;
  width: 11rem;
  --tw-translate-y: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-top-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(238 238 238 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  opacity: 0;
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-duration: 300ms;
}

.group\/step-one:hover .nav-dropdown {
  visibility: visible;
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: 1;
}

.nav-dropdown > li {
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(221 221 221 / var(--tw-border-opacity));
}

.nav-dropdown > li:last-child {
  border-bottom-width: 0px;
}

.nav-dropdown > li a {
  display: block;
  padding-top: 9px;
  padding-bottom: 9px;
  font-size: 14px;
  --tw-text-opacity: 1;
  color: rgb(53 53 53 / var(--tw-text-opacity));
  transition-duration: 200ms;
}

.nav-dropdown > li a:hover {
  --tw-text-opacity: 1;
  color: rgb(232 96 76 / var(--tw-text-opacity));
}
.nav-dropdown.showlang {
  opacity: 1;
  visibility: visible;
}
.menu {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
.menu.show {
  z-index: 999;
  animation: 1s fadeIn forwards;
}
.menu ._b {
  display: inline-block;
  position: fixed;
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s;
}
.menu.show ._b {
  width: 100%;
  left: 0;
}
.menu .menubox {
  width: 1000px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  padding: 220px 0 100px;
  transition: 0.5s;
}
.lb_close,
.hide_close {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid;
  width: 80px;
  height: 80px;
  z-index: 20;
  bottom: auto;
}
.menu.show .menu_close {
  animation: 1s 1.2s fadeIn forwards;
}
.menu .menubox .menu_close {
  right: 0;
  top: 0;
  left: auto;
  transform: translate(0, 0);
  opacity: 0;
  margin: 0;
}
.lb_close div,
.hide_close div {
  position: relative;
  width: 100%;
  height: 100%;
}
.lb_close span,
.hide_close span {
  display: block;
  width: 1px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.lb_close span:first-child,
.hide_close span:first-child {
  transform: translate(-50%, -50%) rotate(45deg);
}
.menu .border {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 80px);
  height: calc(100% - 80px);
}
.menu .border > div {
  width: 100%;
  height: 100%;
  position: relative;
}
.menu .border > div img {
  max-width: 40px;
  position: absolute;
}
.menu .border > div img.tl {
  left: 0;
  top: 0;
}
.menu .borderT,
.menu .borderL,
.menu .borderR,
.menu .borderD {
  background: #d90e0a;
  position: absolute;
  display: inline-block;
  transition: 0.5s;
}
.menu .borderT {
  width: 0;
  height: 2px;
  left: 20px;
  top: 0;
}
.menu .borderL {
  width: 2px;
  height: 0;
  left: 0;
  top: 20px;
}
.menu .borderR {
  width: 2px;
  height: 0;
  right: 0;
  bottom: 20px;
}
.menu .borderD {
  width: 0;
  height: 2px;
  bottom: 0;
  right: 20px;
}
.menu .border > div img {
  max-width: 40px;
  position: absolute;
}
.menu .border > div img.br {
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
}
.menu.show .listbox {
  animation: 1s 1.5s fadeIn forwards;
}
.menu .menubox .listbox {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
  opacity: 0;
}
.menu .menubox .listbox img {
  max-width: 180px;
  margin: 0 auto 30px;
}
.menu .menubox .listbox ul {
  margin-bottom: 110px;
}
.menu .menubox .listbox li {
  font-family: "ZapfHumanist601BT-Roman", "Microsoft JhengHei", sans-serif;
  font-size: 1rem;
  line-height: 1.3125rem;
  margin: 0;
  box-sizing: border-box;
}
.menu .menubox .listbox li a {
  padding: 15px 70px;
  position: relative;
  width: auto;
  height: auto;
  display: inline-block;
}
.menu .menubox .listbox li a:hover {
  color: #fff !important;
}
.menu .menubox .listbox li a:hover::after {
  height: 100%;
}
.menu .menubox .listbox li a p {
  position: relative;
  z-index: 2;
}
.menu .menubox .listbox li a::after {
  content: "";
  width: 100%;
  height: 0;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  z-index: 0;
}
.listbox li a::after {
  background-color: #e70400;
}
.lb_close span:last-child,
.hide_close span:last-child {
  transform: translate(-50%, -50%) rotate(-45deg);
}
.menu.show .borderT,
.menu.show .borderL,
.menu.show .borderR,
.menu.show .borderD {
  transition: 1s 0.8s;
}

.menu.show .borderT {
  width: calc(100% - 60px);
}
.menu.show .borderL {
  height: calc(100% - 20px);
}
.menu.show .borderR {
  height: calc(100% - 60px);
}
.menu.show .borderD {
  width: calc(100% - 20px);
}
.border {
  border: 0;
}
@media only screen and (max-width: 1200px) {
  .menu .menubox {
    width: 80%;
  }
}

@media only screen and (max-width: 600px) {
  .menu .menubox {
    width: 100%;
    padding: 100px 0 100px;
  }
  .menu .menubox .menu_close {
    width: 60px;
    height: 60px;
    top: 25px;
  }
  .menu .border {
    width: calc(100% - 60px);
    height: calc(100% - 100px);
  }
  .menu.show .borderT {
    width: calc(100% - 50px);
  }
  .menu.show .borderR {
    height: calc(100% - 55px);
  }
}
</style>
