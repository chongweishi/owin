<script setup>
import Header from "@/components/Header.vue";
import Home from "@/components/Home.vue";
import Story from "@/components/Story.vue";
import Demo from "@/components/Demo.vue";
import Advantage from "@/components/Advantage.vue";
import Api from "@/components/Api.vue";
import Partner from "@/components/Partner.vue";
import Price from "@/components/Price.vue";
import Contact from "@/components/Contact.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
let menu = ref(null);
let isLock = ref(false);
let types = ref([
  "品牌包网",
  "品牌故事",
  "演示站点",
  "品牌优势",
  "游戏API",
  "合作伙伴",
  "产品价格",
  "商务合作",
]);
const elList = ref([
  "home",
  "story",
  "demo",
  "advantage",
  "api",
  "partner",
  "price",
  "contact",
]);
// 用来表示当前选中处于激活状态的分类的索引
let currentIndex = ref(0);
// 切换类型
const changeType = (val) => {
  currentIndex.value = val; // 获取选中的dom元素
  const typeItemDom = document.getElementById(elList.value[val]); // 开锁
  isLock.value = true; // 第一个参数为水平方向，第二个参数为纵轴方向
  window.scrollTo(0, typeItemDom.offsetTop);
  setTimeout(() => {
    //关锁
    isLock.value = false;
  }, 0);
};
// 监听页面滚动
const handleScroll = () => {
  // 锁关了滚动事件才有效
  if (!isLock.value) {
    types.value.forEach((item, index) => {
      const menuItemDom = document.getElementById(elList.value[index]); // 每个模块距离顶部的距离
      console.log(menuItemDom.offsetTop);
      const offsetTop = menuItemDom.offsetTop; // 页面滚动的距离
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= offsetTop) {
        // 给左边分类设置激活的效果
        currentIndex.value = index;
      }
    });
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Header :currentIndex="currentIndex" @changeType="changeType"></Header>
  <Home ref="menu"></Home>
  <Story ref="menu"></Story>
  <Demo ref="menu"></Demo>
  <Advantage ref="menu"></Advantage>
  <Api ref="menu"></Api>
  <Partner ref="menu"></Partner>
  <Price ref="menu"></Price>
  <Contact ref="menu"></Contact>
</template>

<style lang="scss">
body,
#app {
  background: #08080a;
}
</style>
