<script setup>
import { ref } from "vue";
</script>

<template>
  <header
    class="absolute header-style herder-variant-two top-0 left-0 w-full z-10"
  >
    <div
      class="desktop-menu max-w-[1570px] mx-auto justify-center items-center xl:flex hidden"
    >
      <div class="main-menu flex items-center uppercase">
        <div class="menu-one">
          <ul class="flex items-center nav-list">
            <li>
              <a href="javascript:void(0)" class="nav-link">品牌包网</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link">品牌故事</a>
            </li>
            >
            <li>
              <a href="javascript:void(0)" class="nav-link">演示站点</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link">品牌优势</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link">游戏API</a>
            </li>
          </ul>
        </div>
        <a href="index.html" class="shrink-0 xl:mx-9 mx-7">
          <img src="@/assets/svg/logo.svg" alt="logo" />
        </a>
        <div class="menu-one">
          <ul class="flex items-center nav-list">
            <li>
              <a href="javascript:void(0)" class="nav-link">合作伙伴</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link">产品价格</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link">商务合作</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link">选择语言</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="nav-link ml-2 mr-2">菜单</a>
              <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
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
          <button class="hamburger" id="hamburger">
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
</style>
