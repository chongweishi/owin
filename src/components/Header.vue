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
                      class="inline-block align-middle w-8"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200"
              >
                <span class="ml-2 mr-2">{{ $t("common.menu.menu") }}</span>
                <button class="hamburger font-theme" id="hamburger">
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
    测试
    <div
      class="mobile-menu xl:hidden flex justify-between items-center relative"
    >
      <a href="index.html" class="shrink-0 max-w-[100px]">
        <img src="@/assets/svg/logo.svg" alt="logo" />
      </a>

      <div class="space-x-4 flex items-center">
        <a
          href="#"
          class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200"
        >
          <span class="ml-2">选择语言</span>
        </a>
        <a
          href="#"
          class="text-white font-base text-base inline-flex items-center hover:text-primary-1 duration-200"
        >
          <span class="ml-2 mr-2">菜单</span>
          <button class="hamburger font-theme" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </a>
      </div>
      <div id="mobile-menu" class="mobil-menu">
        <ul>
          <li>
            <a href="javascript:void(0)" class="nav-link nav-link-sm">Home</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link nav-link-sm">Pages</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link nav-link-sm">
              Destination
            </a>
          </li>
          <li>
            <a href="#" class="nav-link nav-link-sm">Blogs</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="nav-link nav-link-sm">
              Packages
            </a>
          </li>
          <li>
            <a href="contact.html" class="nav-link nav-link-sm">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import url(./../assets/css/style.scss);
.nav-dropdown {
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0px;
  z-index: 10;
  width: 15rem;
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
</style>
