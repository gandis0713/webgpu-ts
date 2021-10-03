const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
console.log(__dirname);

module.exports = {
  entry: ['./samples/src/index.tsx'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname + '/build'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/public'),
    index: 'index.html',
    port: 9870,
    historyApiFallback: true,
    publicPath: '/',
    writeToDisk: true,
  },
  mode,
  module: {
    rules: [
      {
        test: /\.wgsl$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname + '/public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      WebGPULib: path.resolve(__dirname + '/../build'),
    },
  },
};
