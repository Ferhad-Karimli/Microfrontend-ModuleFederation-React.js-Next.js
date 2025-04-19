const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "angular_app",
    publicPath: "http://localhost:4200/"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular_app",
      filename: "remoteEntry.js",
      exposes: {
        './AngularComponent': './src/app/app.component.ts'
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true }
      }
    })
  ]
};