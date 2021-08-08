const path = require('path');
require('dotenv').config();
const name = 'Job Application Tracker';

module.exports = {
  publicPath: process.env.APP_ENV === 'prod' ? '/dist/' : '/',
  lintOnSave: process.env.APP_ENV === 'dev',
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
    },
  },
  chainWebpack: config => {
    // provide the app's title in html-webpack-plugin's options list so that
    // it can be accessed in index.html to inject the correct title.
    // https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin
    config.plugin('html').tap(args => {
      args[0].title = name;
      return args;
    });

    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ]);

    config.plugins.delete('prefetch');
    config
      .when(process.env.APP_ENV !== 'dev',
        config => {
          config
            .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial', // only package third parties that are initially dependent
              },
              elementUI: {
                name: 'chunk-elementUI', // split elementUI into a single package
                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
              },
              commons: {
                name: 'chunk-commons',
                test: path.resolve(__dirname, 'components'),
                minChunks: 3, //  minimum common number
                priority: 5,
                reuseExistingChunk: true,
              },
            },
          });
          // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single');
        },
      );
  },
};
