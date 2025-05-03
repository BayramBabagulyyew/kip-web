export default {
  methods: {
    translateTitle(item) {
      if (this.$i18n.locale === "en") {
        return item?.titleEn;
      } else if (this.$i18n.locale === "ru") {
        return item?.titleRu;
      } else {
        return item?.titleTm;
      }
    },
    translateContent(item) {
      if (this.$i18n.locale === "en") {
        return item?.contentEn;
      } else if (this.$i18n.locale === "ru") {
        return item?.contentRu;
      } else {
        return item?.contentTm;
      }
    },
    translateDescription(item) {
      if (this.$i18n.locale === "en") {
        return item?.descriptionEn;
      } else if (this.$i18n.locale === "ru") {
        return item?.descriptionRu;
      } else {
        return item?.descriptionTm;
      }
    },
    translateTagline(item) {
      if (this.$i18n.locale === "en") {
        return item?.taglineEn;
      } else if (this.$i18n.locale === "ru") {
        return item?.taglineRu;
      } else {
        return item?.taglineTm;
      }
    },
    translateAddress(item) {
      if (this.$i18n.locale === "en") {
        return item?.addressEn;
      } else if (this.$i18n.locale === "ru") {
        return item?.addressRu;
      } else {
        return item?.addressTm;
      }
    },
    translateName(item) {
      if (this.$i18n.locale === "en") {
        return item?.nameEn;
      } else if (this.$i18n.locale === "ru") {
        return item?.nameRu;
      } else {
        return item?.nameTm;
      }
    },
    translateLanguage(item){
      if (this.$i18n.locale === "en") {
        return "en-EN";
      } else if (this.$i18n.locale === "ru") {
        return "ru-RU";
      } else {
        return "tm-TM";
      }
    }
  },
};
