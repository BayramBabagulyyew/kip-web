export default ({ app }, inject) => {
  const setView = (view, id) => {
    const query = { view };
    if (view === 'edit' && id) {
      query.id = id;
    }

    app.router.push({ query });
  };

  inject('setView', setView);
};
export class setView {}
