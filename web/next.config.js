const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = 'source-map';
      for (const plugin of config.plugins) {
        if (plugin['constructor']['name'] === 'UglifyJsPlugin') {
          plugin.options.sourceMap = true;
          break;
        }
      }
    }
    return config;
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    api: process.env.NODE_ENV === 'production'
      ? 'https://api.almundo.com'
      : 'http://localhost:3001/',
    imagePath: '/assets/images/hotels/',
  }
});
