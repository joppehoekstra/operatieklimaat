const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DefaultPage.vue") },
      { path: "groepen", component: () => import("pages/GroupsPage.vue") },
      {
        path: "groep/:groupID",
        component: () => import("pages/GroupPage.vue"),
      },

      {
        path: ":pathID",
        component: () => import("pages/DefaultPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
