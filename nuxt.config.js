export default {
  target: 'static',
  server: { port: 3005 },
  head: {
    title: 'Gilles Kagarama - Product Designer & Full Stack Software Engineer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Product Designer & Full Stack Software Engineer',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@litesome/litesome', '@/assets/css/styles.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build',  'nuxt-gsap-module'],
  
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
  },

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: '/',
  },
  router: {
    // base: 'kagaramag.github.io',
  },
  build: {},
}
