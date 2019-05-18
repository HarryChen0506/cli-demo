// demo测试
const path = require('path')
const shell = require('shelljs')
const argv = require('./argv')
console.log('argv', argv)

function createJsFile() {
  var content = `
    console.log('shellJs, good!111')
    console.log('hello, world!')
    console.log('当前时间', Date.now())
  `
  var dist = path.resolve(__dirname, './temp/c.js')
  touchFile(content, dist)
}
function createTempDir() {
  shell.mkdir('-p', path.resolve(__dirname, './temp'))
}
function removeTempDir() {
  shell.rm('-rf', path.resolve(__dirname, './temp/*'))
}
function getNodeInfo() {
  var version = shell.exec('node --version', {silent:true}).stdout
  console.log('version', version)
}
function readCliInfo() {
  console.log('process.argv', process.argv)
}

function initail() {
  // readCliInfo()
  // removeTempDir()
  // createTempDir()
  // createJsFile()
  // getNodeInfo()
}
initail()

// 公共函数
function touchFile(content, dist) {
  shell.echo(content).to(dist)
}