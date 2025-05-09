const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'nextModule',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ExampleComponent': './src/components/ExampleComponent.tsx',
          './CardComponent':'./src/components/CardComponent.tsx',
          './ServiceComponent':'./src/components/ServiceComponent.tsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};