module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'daehanins',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/dhhome/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/dhhome/fonts/font-awesome/css/font-awesome.css' },
      { rel: 'stylesheet', href: '/dhhome/css/style.css' },
      { rel: 'stylesheet', href: '/dhhome/css/responsive.css' },
      { rel: 'stylesheet', href: '/dhhome/css/default.css' }
    ],
    script: [
      { src: '/dhhome/js/modernizr.custom.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js' },
      { src: '/dhhome/js/bootstrap.js' },
      { src: '/dhhome/js/main.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  }
  ,plugins: [
    { src: '~plugins/vue-js-modal', ssr: false }
  ]
}
