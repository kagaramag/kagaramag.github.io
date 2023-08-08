export default {
  target: 'static',
  router: {
    // base: 'https://kagaramag.github.io',
  },
  head: {
    title: 'Gilles Kagarama - Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hey there! I'm Gilles – a developer and designer – currently located in Kigali, Rwanda.",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      {
        rel: 'canonical',
        href: 'https://kagaramag.github.io',
      },
    ],
  },
  css: ['~/assets/css/main.css'],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  modules: ['cookie-universal-nuxt'],
  build: {},
  tailwindcss: {
    jit: true,
    exposeConfig: true,
  },
  colorMode: {
    classSuffix: '',
  },
  env: {
    pin: process.env.PIN,
    age: process.env.AGE,
  },
}
