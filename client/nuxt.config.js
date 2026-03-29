const axios = require('axios');

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
            'KIP Engineering - full-cycle engineering company in Turkmenistan. Technical project design, industrial equipment and parts supply, turnkey project implementation, high-end electronics & IT services, integrated industrial solutions.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'engineering ashgabat, kip engineering, kip tm, kip, engineering, ashgabat engineer, Dovlet Kakabayev Bayram Babagulyyev, developer, KIP, engineering Turkmenistan, engineering Ashgabat, engineering companies, engineering companies Turkmenistan, engineering services, oil and gas engineering, construction Turkmenistan, installation and commissioning, industrial solutions, project management, инжиниринг, инжиниринг Туркменистан, инжиниринг Ашхабад, инжиниринговые услуги, инжиниринговые компании Туркменистан, установка и пусконаладка, нефтегазовый инжиниринг, строительство Туркменистан, Довлет Какабаев, Байрам Бабагулов, разработчик, КИП, инжиниринг, инженерные решения, промышленные решения, проектирование, поставка оборудования, реализация проектов под ключ, IT-услуги, интегрированные промышленные решения',
        },
        { name: 'author', content: 'KIP Engineering' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'KIP Engineering — Engineering Company in Turkmenistan',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'KIP Engineering - full-cycle engineering company in Turkmenistan. Technical project design, industrial equipment and parts supply, turnkey project implementation, high-end electronics & IT services, integrated industrial solutions.',
        },
        { hid: 'og:site_name', property: 'og:site_name', content: 'KIP Engineering' },
        { property: 'og:image:width', content: '1350' },
        { property: 'og:image:height', content: '1000' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'KIP Engineering — Engineering Company in Turkmenistan',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'KIP Engineering - full-cycle engineering company in Turkmenistan. Technical project design, industrial equipment and parts supply, turnkey project implementation, high-end electronics & IT services, integrated industrial solutions.',
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
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/kip-logo.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link,
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-18037765245',
          async: true,
        },
        {
          hid: 'gtag-init',
          innerHTML: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-18037765245');gtag('config', 'G-R2MRRVG6Z1');`,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-init': ['innerHTML'],
      },
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
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: process.env.SITE_URL || 'https://kip.com.tm',
    gzip: true,
    i18n: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    },
    routes: async () => {
      const baseAPI = process.env.BASE_API;
      const routes = [];

      try {
        // Fetch news
        const news = await axios({
          url: `${baseAPI}news`,
          method: 'PATCH',
          params: { limit: 1000, page: 1 },
        });
        if (news.data?.data?.rows) {
          news.data.data.rows.forEach((item) => {
            routes.push({ url: `/news/${item.slug}`, changefreq: 'weekly', priority: 0.7 });
          });
        }
      } catch (e) {}

      try {
        // Fetch projects
        const projects = await axios({ url: `${baseAPI}projects`, method: 'PATCH' });
        if (projects.data?.data?.rows) {
          projects.data.data.rows.forEach((item) => {
            routes.push({ url: `/projects/${item.slug}`, changefreq: 'monthly', priority: 0.7 });
          });
        }
      } catch (e) {}

      try {
        // Fetch products/services
        const products = await axios({ url: `${baseAPI}products-services`, method: 'PATCH' });
        if (products.data?.data?.services) {
          products.data.data.services.forEach((item) => {
            routes.push({
              url: `/products-services/${item.slug}`,
              changefreq: 'monthly',
              priority: 0.7,
            });
          });
        }
      } catch (e) {}

      try {
        // Fetch partners
        const partners = await axios({ url: `${baseAPI}partner`, method: 'GET' });
        if (partners.data?.data?.rows) {
          partners.data.data.rows.forEach((item) => {
            routes.push({ url: `/partners/${item.slug}`, changefreq: 'monthly', priority: 0.6 });
          });
        }
      } catch (e) {}

      return routes;
    },
    exclude: ['/admin', '/admin/**'],
  },

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
