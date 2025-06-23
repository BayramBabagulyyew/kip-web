<template>
  <div>
    <Header :links="links" />
    <main class="main">
      <Intro id="home" url="#projects" :intro="intro" />
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
        },
        {
          id: 5,
          name: 'news',
          url: '#news',
        },
        {
          id: 6,
          name: 'projects',
          url: '#projects',
        },
        {
          id: 7,
          name: 'gallery',
          url: '#gallery',
        },
        {
          id: 8,
          name: 'achievements',
          url: '#achievements',
        },

        {
          id: 9,
          name: 'contactUs',
          url: '#careers',
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
    await this.fetchGallery();
  },

  methods: {
    async fetchIntro() {
      try {
        const { data, statusCode } = await GET_HOME();
        if (statusCode) {
          this.intro = data || {};
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
  },
};
</script>
