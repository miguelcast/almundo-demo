module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || []
    return config;
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    api: process.env.NODE_ENV === 'production'
      ? 'https://api.almundo.com'
      : 'http://localhost:3001/',
    imagePath: '/assets/images/hotels/',
  }
};
