module.exports = {
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-purify-css',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          require('postcss-import')(),
          require('autoprefixer')()
        ]
      }
    }
  ]
}
