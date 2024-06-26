 
const { defineConfig } = require("@vue/cli-service");

const { NODE_ENV, VUE_APP_ENV, VUE_APP_BASE_URL, VUE_APP_PROXY_URL } = process.env;
const { info } = console;
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

info();
info("\x1b[33m%s\x1b[0m", `🏭--NODE环境(NODE_ENV): ${NODE_ENV}`);
info("\x1b[36m%s\x1b[0m", `🏠--APP环境(VUE_APP_ENV): ${VUE_APP_ENV}`);
info("\x1b[36m%s\x1b[0m", `🔗--APP基础URL(VUE_APP_BASE_URL): ${VUE_APP_BASE_URL}`);
info("\x1b[36m%s\x1b[0m", `😈--APP代理URL(VUE_APP_PROXY_URL): ${VUE_APP_PROXY_URL}`);
info();

module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  publicPath: NODE_ENV === "development" ? "/" : "./",
  outputDir: VUE_APP_ENV === "production" ? "dist-production" : "dist-production-test",
  indexPath: "index.html",
  filenameHashing: false,
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Mr. Money熊好貸 – 代理各家銀行與三大融資公司與金融機構的數位融資平台",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  
  devServer: {
    // host:"172.20.7.155",
    port:4007,
    proxy: {
      //配置跨域
      '/appApi/': {
        target: 'https://www.aaiholding.com/',
        // ws:true,
        changOrigin: true,
        pathRewrite: {
          '^/appApi/': 'https://www.aaiholding.com/',
        }
      },
      '/negotiateApi/': {
        target: 'https://www.aaiholding.com:4528/signalr/',
        ws:true,
        secure: true, // 如果是https接口，需要配置这个参数为true
        changOrigin: true,
        pathRewrite: {
          '^/negotiateApi/': 'https://www.aaiholding.com:4528/signalr/',
        }
      },
      '/apiUrl/': {
        target: 'http://18.162.212.117:4055/',
        // ws:true,
        changOrigin: true,
        pathRewrite: {
          '^/apiUrl/': 'http://18.162.212.117:4055/',
        }
      }
    },
    open: true,
    client: {
      overlay: false,
    },
  },
});
//白屏问题修改
return;