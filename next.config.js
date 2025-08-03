/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore HTML files in node_modules
    config.module.rules.push({
      test: /\.html$/,
      issuer: /node_modules/,
      use: 'ignore-loader',
    });

    // Ignore s3_setup.js to avoid aws-sdk and mock-aws-s3 issues
    config.module.rules.push({
      test: /@mapbox\/node-pre-gyp\/lib\/util\/s3_setup\.js$/,
      use: 'null-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
