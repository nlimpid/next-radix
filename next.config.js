/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // webpack: function (config, options) {
  //   config.experiments = { asyncWebAssembly: true, layers: true };
  //   return config;
  // }
}

module.exports = nextConfig
