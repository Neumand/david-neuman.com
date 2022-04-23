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
      'david-neuman.com',
      'static.ghost.org',
      'david-neuman-cms.herokuapp.com',
      'images.unsplash.com',
      'images-na.ssl-images-amazon.com',
    ],
  },
};
