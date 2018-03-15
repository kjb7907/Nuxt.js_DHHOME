module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    base: '/dhhome/'
  },
  head: {
    title: '대한아이앤에스',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'keywords', content:'스마트공장, 스마트팩토리, mes, oee, 설비종합효율, 공장자동화'}
    // <meta name="keywords" content="ems, pms, flex, cdp, lms, erp, 솔루션">

    ],
    link: [
      { rel: 'stylesheet', href: '/dhhome/dhhome/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/dhhome/dhhome/fonts/font-awesome/css/font-awesome.css' },
      { rel: 'stylesheet', href: '/dhhome/dhhome/css/style.css' },
      { rel: 'stylesheet', href: '/dhhome/dhhome/css/responsive.css' },
      { rel: 'stylesheet', href: '/dhhome/dhhome/css/default.css' }
    ],
    script: [
      { src: '/dhhome/dhhome/js/modernizr.custom.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js' },
      { src: '/dhhome/dhhome/js/bootstrap.js' },
      { src: '/dhhome/dhhome/js/main.js' }
    ],
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
