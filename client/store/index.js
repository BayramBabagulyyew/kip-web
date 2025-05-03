export const state = () => ({
  imageURL: process.env.IMAGE_URL,
  isPopup: false,
  aboutDatas: null,
});

export const getters = {
  imageURL(state) {
    return state.imageURL;
  },
  isPopup(state) {
    return state.isPopup;
  },
  aboutDatas: (state) => {
    return state.aboutDatas
  },
};

export const mutations = {
  updateTitleValues(state, payload) {
    state.main.title;
  },
  openPopup(state, status) {
    state.isPopup = status;
  },
  setAboutDatas(state, payload) {
    state.aboutDatas = payload
  },
};
