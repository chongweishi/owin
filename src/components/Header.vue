<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 0 ? 'font-theme' : ''"
                @click="changeType(0)"
              >
                品牌包网
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 1 ? 'font-theme' : ''"
                @click="changeType(1)"
              >
                品牌故事
              </a>
            </li>
            >
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 2 ? 'font-theme' : ''"
                @click="changeType(2)"
              >
                演示站点
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 3 ? 'font-theme' : ''"
                @click="changeType(3)"
              >
                品牌优势
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 4 ? 'font-theme' : ''"
                @click="changeType(4)"
              >
                游戏API
              </a>
            </li>
          </ul>
        </div>
        <a href="index.html" class="shrink-0 xl:mx-9 mx-7">
          <img src="@/assets/svg/logo.svg" alt="logo" />
        </a>
        <div class="menu-one">
          <ul class="flex items-center nav-list">
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 5 ? 'font-theme' : ''"
                @click="changeType(5)"
              >
                合作伙伴
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 6 ? 'font-theme' : ''"
                @click="changeType(6)"
              >
                产品价格
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="nav-link"
                :class="currentIndex == 7 ? 'font-theme' : ''"
                @click="changeType(7)"
              >
                商务合作
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link">选择语言</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link ml-2 mr-2">菜单</a>
              <button class="hamburger align-middle" id="hamburger">
                <span class="bg-theme"></span>
                <span class="bg-theme"></span>
                <span class="bg-theme"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="basis-[20%] flex justify-end items-center">
        <a
          href="#"
          class="text-white font-medium text-base inline-flex items-center mr-8 hover:text-primary-1 duration-200"
        >
          <span class="ml-2">选择语言</span>
        </a>
        <a
          href="#"
          class="text-white font-medium text-base inline-flex items-center mr-8 hover:text-primary-1 duration-200"
        >
          <span class="ml-2 mr-2">菜单</span>
          <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </a>
      </div> -->
    </div>
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
.active {
}
</style>
