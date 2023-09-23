import { createI18n } from "vue-i18n";
import config from "../config";

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
    let configFile = [config.site, "layout", "components", "common"];
    let filename = module.match(/(?<=\/).+(?=\.json)/)[0].split("/")[1];
    if (configFile.includes(filename)) {
      messages[filename] = { ...modules[module].default };
    }
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
  legacy: false,
  warnHtmlInMessage: "off",
  locale: localStorage.getItem("curLangKey") ?? config.locale, // 设置地区
  fallbackLocale: config.locale,
  globalInjection: true,
  messages,
});

export default i18n;
