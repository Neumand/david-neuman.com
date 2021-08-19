module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  images: {
    domains: [
      'images.unsplash.com',
      'david-neuman.com',
      'images-na.ssl-images-amazon.com',
    ],
  },
};
