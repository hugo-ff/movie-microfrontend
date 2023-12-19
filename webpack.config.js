const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'movie-microfrontend.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
    port: '3001',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    // new ModuleFederationPlugin({
    //   name: 'movieMicrofrontend',
    //   filename: 'movie.js',
    //   exposes: {
    //     './Movie': './src/components/pages/Movie/Movie.tsx',
    //   },
    //   shared: {
    //     ...dependencies,
    //     react: { singleton: true, requiredVersion: dependencies.react },
    //     'react-dom': {
    //       singleton: true,
    //       requiredVersion: dependencies['react-dom'],
    //     },
    //   },
    // }),
  ],
};
