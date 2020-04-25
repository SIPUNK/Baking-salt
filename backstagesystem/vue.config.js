const webpack = require("webpack");

module.exports = {
  configureWebpack: {
	  
	performance: {
		hints:'warning',
		//入口起点的最大体积
		maxEntrypointSize: 50000000,
		//生成文件的最大体积
		maxAssetSize: 30000000,
		//只给出 js 文件的性能提示
		assetFilter: function(assetFilename) {
			return assetFilename.endsWith('.js');
		}
	},  
	  
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
    ],
	
	
  },
  publicPath: './'
};