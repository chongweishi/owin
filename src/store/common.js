import { defineStore } from "pinia";

const useCommonStore = defineStore({
  id: "common", // id是唯一的，如果有多个文件，ID不能重复
  state: () => {
    return {
      langs: {
        zh_chs: {
          key: "zh_chs",
          name: "简体中文",
          shortName: "CN",
          image: "img/lang/lang-cn.png",
        },
        zh_cht: {
          key: "zh_cht",
          name: "繁體中文",
          shortName: "TW",
          image: "img/lang/lang-hg.png",
        },
        en: {
          key: "en",
          name: "English",
          shortName: "EN",
          image: "img/lang/lang-en.png",
        },
        vn: {
          key: "vn",
          name: "Tiếng Việt",
          shortName: "VN",
          image: "img/lang/lang-vn.png",
        },
        pt: {
          key: "pt",
          name: "Português",
          shortName: "PT",
          image: "img/lang/lang-pt.png",
        },
        es: {
          key: "es",
          name: "Español",
          shortName: "ES",
          image: "img/lang/lang-es.png",
        },
      },
      curLang: {
        key: "zh_chs",
        name: "简体中文",
        shortName: "CN",
        image: "img/lang/lang-cn.png",
      },
    };
  },
  getters: {
    // isLogin(state) {
    //   return (!state.userInfo || !Object.keys(state.userInfo).length) &&
    //     state.sessionKey == ""
    //     ? false
    //     : true;
    // },
  },
  actions: {
    setLang(data) {
      this.curLang = data;
      localStorage.setItem("curLangKey", data.key);
      window.location.reload();
    },
  },
  // 开启数据缓存，在 strategies 里自定义 key 值，并将存放位置由 sessionStorage 改为 localStorage
  // 默认所有 state 都会进行缓存，你可以通过 paths 指定要持久化的字段，其他的则不会进行持久化，如：paths: ['userinfo'] 替换key的位置
  persist: {
    enabled: true,
    strategies: [
      {
        key: "common",
        storage: localStorage,
      },
    ],
  },
});

export default useCommonStore;
