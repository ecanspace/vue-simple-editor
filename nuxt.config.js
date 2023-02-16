export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bst-official-website',
    htmlAttrs: {
      lang: 'en'
    },
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/global.css',
    '@/assets/css/base.css',
    '@/assets/css/editor/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/index'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    '@/components/base',
    '@/components/editor',
  ],

  // // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   '@nuxtjs/tailwindcss'
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
  },

  proxy: {
    '/napi': 'http://localhost:1000/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  generate: {
    fallback: 'index.html',
    dir: process.env.NODE_ENV === 'production' ? 'server/webfront' : 'dist'
  },

  server: {
    host: '0.0.0.0',
    port: 3000
  }
}
