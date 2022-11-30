const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   include: path.resolve(__dirname, 'src'),
      // },
    //   {
    //     test: /\.tsx?$/,
    //     exclude: /(node_modules)/,
    //     use: {
    //       // `.swcrc` can be used to configure swc
    //       loader: "swc-loader"
    //     }
    //   },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          // `.swcrc` can be used to configure swc
          loader: "babel-loader",
          options: {
            presets: [
                "@babel/preset-typescript",
                "@babel/preset-env",
                "@babel/preset-react",
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default)
      template: './src/index.ejs'
    })
  ]
};