const dictionaries = {
  'en': () => import("./dictionaries/en.json").then(r => r.default),
  'zh': () => import("./dictionaries/cn.json").then(r => r.default)
}

export const getDictionary = (lang) => {
  return dictionaries[lang]();
}