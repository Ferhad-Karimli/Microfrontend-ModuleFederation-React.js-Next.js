const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001, // Choose a different port from your container
    hot: true
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react_module', // Name of your federated module
      filename: 'remoteEntry.js', // The remote entry filename
      exposes: {
        // Components you want to expose
        './Button': './src/components/Button',
        './Card': './src/components/Card',
        // Add more components as needed
      },
      shared: {
        // Shared dependencies
        react: { 
          singleton: true, 
          requiredVersion: '^18.2.0', 
          eager: true 
        },
        'react-dom': { 
          singleton: true, 
          requiredVersion: '^18.2.0', 
          eager: true 
        },
        // Add other shared dependencies
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};