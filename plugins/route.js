export default function({ app, store }) {
  app.router.afterEach((to, from) => {
    console.log("algo")
  })

  app.router.beforeEach((to, from, next) => {
    console.log("algo 2")
    // store.commit("TOGGLE_SIDEBAR");
    next();
  });
}

