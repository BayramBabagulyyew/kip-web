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
          hid: 'description',
          name: 'description',
          content:
            'KIP Engineering — leading engineering company in Turkmenistan, Ashgabat. Professional engineering services, installation, commissioning, industrial solutions, oil and gas engineering, construction and project management.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'KIP, KIP engineering, engineering, engineering Turkmenistan, engineering Ashgabat, engineering companies, engineering companies Turkmenistan, engineering services, engineering services Ashgabat, industrial engineering Turkmenistan, oil and gas engineering, construction Turkmenistan, project management Turkmenistan, installation and commissioning, инжиниринг, инжиниринг Туркменистан, инжиниринг Ашхабад, инжиниринговые услуги, инжиниринговые услуги Туркменистан, инжиниринговые компании, установка и пусконаладка, нефтегазовый инжиниринг, строительство Туркменистан, KIP компания',
        },
        { name: 'author', content: 'KIP Engineering' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'KIP Engineering — Engineering Company in Turkmenistan' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'KIP Engineering — leading engineering company in Turkmenistan. Professional engineering services, installation, commissioning, and industrial solutions in Ashgabat.',
        },
        { hid: 'og:site_name', property: 'og:site_name', content: 'KIP Engineering' },
        { property: 'og:image:width', content: '1350' },
        { property: 'og:image:height', content: '1000' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'KIP Engineering — Engineering Company in Turkmenistan' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'KIP Engineering — leading engineering company in Turkmenistan. Professional engineering services, installation, commissioning, and industrial solutions.',
        },

        // App / Theme
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#183A60' },
        { name: 'msapplication-navbutton-color', content: '#183A60' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#183A60' },
        { name: 'msapplication-TileColor', content: '#183A60' },
        { name: 'application-name', content: 'KIP Engineering' },
        { name: 'msapplication-tooltip', content: 'KIP Engineering' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'KIP Engineering' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'google-site-verification', content: 'xu-yspm5heEMMoD95NndhaGERRHkGEs4xEQPYHLUgns' },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/kip-logo.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link,
      ],
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
    IMAGE_URL: process.env.IMAGE_URL,
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    BASE_API: process.env.BASE_API,
    retry: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
