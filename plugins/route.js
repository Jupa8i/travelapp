export default function({ app, store }) {
  app.router.afterEach((to, from) => {

  })

  app.router.beforeEach((to, from, next) => {
    // store.commit("");
    next();
  });
}

