const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler:true,
  // proxy:{
  //   '/api':{
  //     target:'http://110.42.165.13:9276/api',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api' : ''
  //     }
  //   }
  // }
})
