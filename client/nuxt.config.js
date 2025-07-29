export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      titleTemplate: '%s | KIP',
      title: 'KIP',
      htmlAttrs: {
        lang: 'en',
        myAttribute: 'KIP',
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        },
        {
          hid: 'инжиниринговые услуги туркменистан',
          name: 'инжиниринговые услуги туркменистан',
          content: 'инжиниринговые услуги туркменистан',
          description: 'инжиниринговые услуги туркменистан',
          keyword: 'инжиниринговые услуги туркменистан',
        },
        {
          hid: 'og:description',
          name: 'инжиниринговые услуги туркменистан',
          content: 'инжиниринговые услуги туркменистан',
          description: 'инжиниринговые услуги туркменистан',
          keyword: 'инжиниринговые услуги туркменистан',
        },
        {
          hid: 'инжиниринг туркменистан',
          name: 'инжиниринг туркменистан',
          content: 'инжиниринг туркменистан',
          description: 'инжиниринг туркменистан',
          keyword: 'инжиниринг туркменистан',
        },
        {
          hid: 'установка и пусконаладка туркменистан',
          name: 'установка и пусконаладка туркменистан',
          content: 'установка и пусконаладка туркменистан',
          description: 'установка и пусконаладка туркменистан',
          keyword: 'установка и пусконаладка туркменистан',
        },
        { property: 'og:title', content: 'KIP' },
        {
          name: 'author',
          content: 'Developer: KIP group',
        },
        {
          itemprop: 'og:image:width',
          content: `1350`,
        },
        {
          itemprop: 'og:image:height',
          content: `1000`,
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#183A60' },
        { name: 'msapplication-navbutton-color', content: '#183A60' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#183A60' },
        { name: 'msapplication-TileColor', content: '#183A60' },
        { name: 'application-name', content: 'KIP' },
        { name: 'msapplication-tooltip', content: 'KIP' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'KIP' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/kip-logo.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
         ...i18nHead.link],
    };
  },

  server: {
    port: 3333,
    host: '0.0.0.0',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css', '@/assets/css/style.scss', '@/assets/css/grid.scss'],

  loading: {
    color: '#183A60',
    height: '2px',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/tinymce.js', mode: 'client' },
    { src: '@/plugins/query-changer.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['@/components', '@/components/base', '@/components/adminka', '@/components/popup'],
  },
  ssr: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
  ],

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: 'ru',
    },
    locales: [
      { code: 'en', lang: 'EN', name: 'ENG', iso: 'en-EN', file: 'en' },
      {
        code: 'ru',
        lang: 'RU',
        name: 'RUS',
        iso: 'ru-RU',
        file: 'ru',
        isCatchallLocale: true,
      },
    ],
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  env: {
    BASE_API: process.env.BASE_API,
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    BASE_API: process.env.BASE_API,
    retry: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
