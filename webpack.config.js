var webpack = require('webpack');
var path=require('path');
module.exports = {
	context:__dirname+'/src',
 	mode: "development",
 	devServer: {
	historyApiFallback: true,
	inline: true
	},
	entry: [
   'webpack-dev-server/client?http://localhost:8080/',
   './js/root.js'
	],
    // entry:'./js/index.js', //入口文件
     module:{
          rules:[
               {
                   test:/\.js?$/,//支持正则
                   exclude:/(node_modules)/,
                   loader:'babel-loader' ,
                   query:{
                   	presets:['react','es2015']
                   }
               },
               //下面是使用ant-design的配置文件
    		 {test:/\.css$/,loader:"style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]"}
          ]
     },
     
 output:{
          //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
          path:__dirname+"/src/", //输出位置
          filename:'bundle.js' //输入文件
     }
};