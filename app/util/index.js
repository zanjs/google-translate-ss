const URLREGEXP = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/

const isUrl = text => URLREGEXP.test(text);

// 是否有日文
const isLangJP = text => {
  return /.*[\u3040-\u309F\u30A0-\u30FF]+.*$/.test(text)
}

// 去左右控股
const trim = text => {
  return text.replace(/(^\s*)|(\s*$)/g, '')
}

module.exports = {
  URLREGEXP,
  isUrl,
  isLangJP,
  trim,
}