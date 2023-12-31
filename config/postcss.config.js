module.exports = {
  plugins: [
    require('postcss-sort-media-queries'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
