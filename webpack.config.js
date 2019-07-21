const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'synospecies.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'synospecies.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
           /* "presets": [
              "@babel/preset-env", {
                "targets": " > 1%, not IE 11, chrome 41",
                "spec": true,
                "useBuiltIns": "entry",
                "corejs": 3,
                "forceAllTransforms": true,
                "ignoreBrowserslistConfig": true,
                "modules": "commonjs",
                "debug": false, 
                "include": ["@babel/plugin-transform-arrow-functions"]
              }
            ],*/
            "plugins": [
                ["@babel/plugin-transform-arrow-functions", { "spec": true }],
                ["@babel/plugin-transform-runtime",
                  {
                    "regenerator": true
                  }
                ],
                ["@babel/plugin-transform-object-assign"],
                ["@babel/plugin-proposal-class-properties"]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.js$/,
        /* ... */
      },
      {
        test: /\.(sa|sc|c)ss$/,
        /* ... */
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
               {
                 // Using file-loader for these files
                 loader: "file-loader",
  
                 // In options we can set different things like format
                 // and directory to save
                 options: {
                   outputPath: 'fonts'
                 }
               }
             ]
      }
    ]
  },
  externals: {
    'node-fetch': 'fetch',
    'xmldom': 'window',
    '@nleanba/ndjs': 'window',
    'jsonld': 'jsonld',
    'ext-rdflib': '$rdf',
  },
  optimization: {
    minimize: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    compress: true,
    disableHostCheck: true
  }
};