var path = require('path');
var config = {
 entry: {
   former:"./speech.jsx"
  },
  output: {
      path: "./dist/",
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    },
    module: {
           loaders: [
               {
                   test: /\.jsx?$/,
                   loader: 'babel-loader',
                   exclude: /node_modules/,
                    query: {
                          presets: ['es2015', 'react']
                        },
                        progress: true
                  
               },
               { test: /\.css$/, 
                 loader: "style-loader!css-loader"
                }

           ]
       }

};

module.exports = config;
// https://www.bram.us/2016/04/24/setting-up-react-for-es6-with-webpack-and-babel/