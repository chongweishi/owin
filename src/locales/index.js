import { createI18n } from "vue-i18n";

// 批量引入
const en = import.meta.glob(["./en-US/*.json"], { eager: true });
const cn = import.meta.glob("./zh-CN/*.json", { eager: true });
const tw = import.meta.glob("./zh-TW/*.json", { eager: true });
const vn = import.meta.glob("./vi-VN/*.json", { eager: true });
const pt = import.meta.glob("./pt-BR/*.json", { eager: true });
const es = import.meta.glob("./es-MX/*.json", { eager: true });

//批量合并json文件
const loadLocales = (modules) => {
  const messages = {};
  Object.keys(modules).forEach((module) => {
    // let configFile = ["common"];
    let filename = module.match(/(?<=\/).+(?=\.json)/)[0].split("/")[1];
    // if (configFile.includes(filename)) {
    messages[filename] = { ...modules[module].default };
    // }
  });
  return messages;
};

const messages = {
  en: {
    ...loadLocales(en),
  },
  zh_chs: {
    ...loadLocales(cn),
  },
  zh_cht: {
    ...loadLocales(tw),
  },
  vn: {
    ...loadLocales(vn),
  },
  pt: {
    ...loadLocales(pt),
  },
  es: {
    ...loadLocales(es),
  },
};
const i18n = createI18n({
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  warnHtmlInMessage: "off",
  locale: localStorage.getItem("curLangKey") ?? "zh_chs", // 设置地区
  fallbackLocale: "zh_chs",
  globalInjection: true, // 全局注册$t方法
  messages,
});
export default i18n;
