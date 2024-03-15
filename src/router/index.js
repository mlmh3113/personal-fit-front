import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import StudentsLayout from "../views/students/StudentsLayout.vue";
import StudentsApi from "@/api/StudentsApi";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: StudentsLayout,
      children: [
        {
          path: "new-student",
          name: "new-student",
          component: () => import("../views/students/NewStudentView.vue"),
        },
        {
          path: "all-students",
          name: "all-students",
          component: () => import("../views/students/AllStudentsView.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "student/:id",
          name: "student",
          component: () => import("../views/students/StudentView.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "confirm-account/:token",
          name: "confirm-account",
          component: () => import("../views/students/ConfirmAccountView.vue"),
        },
      ],
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/blog/IndexView.vue"),
    },
    {
      path: "/blog/:id",
      name: "blog-post",
      component: () => import("../views/blog/BlogPostView.vue"),
    },
    {
      path: "/blog/new-post",
      name: "new-post",
      component: () => import("../views/blog/NewPostView.vue"),
    },
    {
      path: "/blog/edit-post/:id",
      name: "edit-post",
      component: () => import("../views/blog/EditPostView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      await StudentsApi.auth();
      next();
    } catch (error) {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
