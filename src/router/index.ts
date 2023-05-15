import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "To Do List",
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});
router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title: string = to.meta.title as string;

  //Take the title from the parameters
  // const titleFromParams = to.params.pageTitle;
  // If the route has a title, set it as the page title of the document/page
  if (typeof title === "string") {
    document.title = title;
  }
  // If we have a title from the params, extend the title with the title
  // from our params
  // if (titleFromParams) {
  //   document.title = `${titleFromParams} - ${document.title}`;
  // }
  // Continue resolving the route
  next();
});

export default router;
