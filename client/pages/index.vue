<template>
  <div>
    <Header :links="links" :isPlaying="isVideoPlaying" />
    <main class="main">
      <Intro id="home" url="#projects" :intro="intro" @isPlaying="setVideoPlaying" />
      <About id="about" :aboutUs="aboutUs" />
      <!-- <Ehs id="ehs" /> -->
      <product-service id="products-services" :items="products" />
      <News id="news" :news="news" />
      <Projects id="projects" :projects="projects" />
      <Gallery id="gallery" :gallery="gallery" />
      <Representative id="achievements" :main="main" />
      <Vacancy id="careers" />
    </main>
  </div>
</template>

<script>
import {
  GET_ABOUT,
  GET_GALLERY,
  GET_HOME,
  GET_NEWS,
  GET_PARTNERS,
  GET_PRODUCTS,
  GET_PROJECTS,
  GET_REAL_PARTNERS,
} from '~/api/home.api';

export default {
  data() {
    return {
      aboutUs: {},
      products: {},
      intro: {},
      news: {},
      projects: [],
      gallery: [],
      main: {
        dealership: [],
        clients: [],
        projects: [],
      },
      partners: [],
      isVideoPlaying: false, // To track if the video is playing
      isModalVisible: false, // For modal visibility
      selectedImage: '', // To store the clicked image URL
      links: [
        {
          id: 1,
          name: 'home',
          url: '/#home',
        },
        {
          id: 2,
          name: 'aboutUs',
          url: '#about',
        },
        {
          id: 3,
          name: 'ehs',
          url: '/ehs',
        },
        {
          id: 4,
          name: 'productsServices',
          url: '#products-services',
          path: 'products-services/',
          items: [],
        },
        {
          id: 5,
          name: 'partners',
          url: 'partners',
          items: [],
          path: 'partners/',
        },
        {
          id: 6,
          name: 'news',
          url: '#news',
          path: 'news/',
          // items: [],
        },
        {
          id: 7,
          name: 'projects',
          url: '#projects',
          path: 'projects/',
          // items: [],
        },
        {
          id: 8,
          name: 'gallery',
          url: '#gallery',
        },
        {
          id: 9,
          name: 'achievements',
          url: '#achievements',
        },

        {
          id: 10,
          name: 'contactUs',
          url: '#careers',
        },
      ],
    };
  },

  head() {
    return {
      title: 'KIP Engineering — Engineering Company in Turkmenistan, Ashgabat',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'KIP Engineering — leading engineering company in Turkmenistan, Ashgabat. Engineering services, installation, commissioning, oil and gas engineering, industrial solutions, construction and project management.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'KIP, KIP engineering, engineering, engineering Turkmenistan, engineering Ashgabat, engineering companies, engineering companies Turkmenistan, engineering services, oil and gas engineering, construction Turkmenistan, installation and commissioning, industrial solutions, project management, инжиниринг, инжиниринг Туркменистан, инжиниринг Ашхабад, инжиниринговые услуги, инжиниринговые компании Туркменистан, установка и пусконаладка, нефтегазовый инжиниринг, строительство Туркменистан',
        },
        { hid: 'og:title', property: 'og:title', content: 'KIP Engineering — Engineering Company in Turkmenistan, Ashgabat' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'KIP Engineering — leading engineering company in Turkmenistan. Professional engineering services, installation, commissioning, and industrial solutions in Ashgabat.',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'KIP Engineering — Engineering Company in Turkmenistan' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'KIP Engineering — leading engineering company in Turkmenistan. Engineering services, installation, commissioning, and industrial solutions.',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KIP Engineering',
            alternateName: 'KIP',
            description:
              'Leading engineering company in Turkmenistan providing engineering services, installation, commissioning, oil and gas engineering, and industrial solutions.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ashgabat',
              addressCountry: 'Turkmenistan',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Turkmenistan',
            },
            knowsAbout: [
              'Engineering',
              'Engineering Services',
              'Oil and Gas Engineering',
              'Installation and Commissioning',
              'Industrial Solutions',
              'Construction',
              'Project Management',
            ],
          },
        },
      ],
    };
  },

  async mounted() {
    await this.fetchAbout();
    await this.fetchProducts();
    await this.fetchIntro();
    await this.fetchNews();
    await this.fetchProjects();
    await this.fetchPartners();
    await this.fetchRealPartners();
    await this.fetchGallery();
  },
  watch: {
    partners: async function (val) {
      this.links.find((link) => link.id === 5).items = val?.rows?.map((project) => {
        return {
          id: project.id,
          name: project[`name${this.$i18n.locale === 'ru' ? 'Ru' : 'En'}`],
          slug: project.slug,
        };
      });
    },
    products: async function (val) {
      this.links.find((link) => link.id === 4).items = val?.services?.map((products) => {
        return {
          id: products.id,
          name: products[`name${this.$i18n.locale === 'ru' ? 'Ru' : 'En'}`],
          slug: products.slug,
        };
      });
    },
  },

  methods: {
    async fetchIntro() {
      try {
        const { data, statusCode } = await GET_HOME();
        if (statusCode) {
          this.intro = data || {};
          this.intro.video = 'kip.webm';
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchAbout() {
      try {
        const { data, statusCode } = await GET_ABOUT();
        if (statusCode) {
          this.aboutUs = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchProducts() {
      try {
        const { data, statusCode } = await GET_PRODUCTS();
        if (statusCode) {
          this.products = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchNews() {
      try {
        const { data, statusCode } = await GET_NEWS({ limit: 3, page: 1 });
        if (statusCode) {
          this.news = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchProjects() {
      try {
        const { data, statusCode } = await GET_PROJECTS();
        if (statusCode) {
          this.projects = data || [];
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchGallery() {
      try {
        const { data, statusCode } = await GET_GALLERY({ limit: 6, page: 1 });
        if (statusCode) {
          this.gallery = data.data || [];
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchPartners() {
      try {
        const { data, statusCode } = await GET_PARTNERS();
        if (statusCode) {
          this.main = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchRealPartners() {
      try {
        const { data } = await GET_REAL_PARTNERS();
        console.log(data);
        this.partners = data || {};
      } catch (error) {
        console.error(error);
      }
    },

    setVideoPlaying(value) {
      this.isVideoPlaying = value;
    },
  },
};
</script>
