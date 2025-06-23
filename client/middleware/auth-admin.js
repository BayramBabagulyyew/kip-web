export default async function ({ app, redirect }) {
  let token = app.$cookies.get('Authorization');
  const locale = app.i18n.locale || 'en';

  if (!token) {
    return redirect(`/${locale}/admin/login`);
  }
}
