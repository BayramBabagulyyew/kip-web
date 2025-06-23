export default {
  methods: {
    translateLanguage(item) {
      if (this.$i18n.locale === 'en') {
        return 'en-EN';
      } else if (this.$i18n.locale === 'ru') {
        return 'ru-RU';
      } else {
        return 'tm-TM';
      }
    },
    translator(item) {
      if (this.$i18n.locale === 'en') {
        return `${item}En`;
      }
      if (this.$i18n.locale === 'ru') {
        return `${item}Ru`;
      }
      return `${item}Tm`;
    },
  },
};
