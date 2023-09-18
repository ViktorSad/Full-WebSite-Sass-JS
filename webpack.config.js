 const webpack  = require ("webpack");
 const path = require ("path");
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = (env, options)=>{
	const isProduction  = options.mode ==="production";

	const config = {
		mode: isProduction?"production":"development",
		
		watch:!isProduction,
    plugins:[ new CleanWebpackPlugin(), new HtmlWebpackPlugin({template:"index.html"}), new MiniCssExtractPlugin({filename:'style.css'})],
		module: {
  rules: [
    {
      test: /\.(?:js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env']
          ]
        }
      }
    },
	{
        test: /\.scss$/i,
        use: [
          
          // Translates CSS into CommonJS
          MiniCssExtractPlugin.loader,
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }  
  ]
},
		entry:["./src/index.js","./src/Sass/style.scss"],
		output :{
			path: path.resolve(__dirname, "dist"),
			filename:'script.js'
		},
		
	}
  if (!isProduction){config.devtool = "source-map"}
	return config

 }