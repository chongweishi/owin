// 获取assets静态资源
export const getAssetsFile = (imgPath) => {
  try {
    const handlePath = "../assets/" + imgPath;
    return new URL(handlePath, import.meta.url).href;
  } catch (error) {
    console.warn(error);
  }
};
