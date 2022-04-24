
function addToConf(str) {
    str += '// add-flag' // 添加的位置标记
    let confStr = handleConfRouStr(readF(path.resolve('./src/addRoute.js')), str)
    writeF(path.resolve('./src/addRoute.js'), confStr)
    shell.echo('路由添加成功!')
    shell.echo('结束生成页面')
    shell.echo('>>>>>>')
  }
  function handleConfRouStr(ori, str) {
    ori = ori.replace('// add-flag', str)
    return ori
  }

  const addRoute = [

    // add-flag
    // 不能删除
  ]
  
  export default addRoute