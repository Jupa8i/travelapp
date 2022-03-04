export default {
  // Global page headers:
  head: {
    title: 'travelapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS:
  css: [
    '~assets/css/main.css'
  ],

  styleResources: {
    scss: [
      '~assets/scss/main.scss',
    ]
  },

  // Plugins to run before rendering page:
  plugins: [
    // '~plugins/route',
  ],

  // Auto import components:
  components: true,

  // Modules for dev and build (recommended):
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules:
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration:
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000:
    baseURL: process.env.API_URL,
  },

  // PWA module configuration:
  pwa: {
    manifest: {
      lang: 'es'
    }
  },




  // Build Configuration:
  build: {

  }
}
