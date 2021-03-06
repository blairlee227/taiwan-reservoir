export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Taiwan Reservoir',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // reset css
    '@/assets/css/reset.css',
    // SCSS file in the project
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/mixin.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // dotenv
    '@nuxtjs/dotenv',
    // tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Defines environment variables that should be available on the client side
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8080'
  },

  target: 'static',
  router: {
    base: '/taiwan-reservoir/'
  }
}
