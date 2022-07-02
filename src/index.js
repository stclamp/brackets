module.exports = function check(str, bracketsConfig) {
  let configArr = [];
  let result = str;
  bracketsConfig.map(item => {
    configArr.push(item.join(''))
  })


  for (let i = 0; i < str.length; i = i + 2) {
    for (k in configArr) {
      result = result.replace(configArr[k], '')
    }
  }

  return result ? false : true
}
