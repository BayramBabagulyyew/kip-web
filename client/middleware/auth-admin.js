export default async function (app) {
  let token = app.$cookies.get("Authorization");

  if (!token) {
    return app.redirect("/admin/login");
  }
}
