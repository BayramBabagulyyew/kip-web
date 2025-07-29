export default ({ app }, inject) => {
  const setView = (view, item = {}) => {
    console.log('setView', view, item);

    const query = { view };

    if (view === 'edit' && item.id) {
      query.id = item.id;
    }

    app.router.push({ query });
  };

  inject('setView', setView);
};
export class setView {}