const path = require('path')
const resolve = (src) => {
  return path.resolve(__dirname, src)
}
process.env.VUE_APP_VERSION = require('./package.json').version

console.log(process.env.VUE_APP_VERSION, 'VUE_APP_VERSION')
console.log(process.env.VUE_APP_NORMAL, 'NORMAL')

console.log(process.env.NODE_ENV, 'NODE_ENV')
console.log(process.env.BASE_URL, 'BASE_URL')

module.exports = {
  publicPath: process.env.BASE_URL,
  runtimeCompiler: false,
  chainWebpack: config => {
    // 别名设置
    config.resolve.alias.set('style', resolve('src/assets/less'))
    // 全局引入公共mixin, less变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/less/imports.less'),
      ],
    })
}