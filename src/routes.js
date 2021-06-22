import { createWebHistory, createRouter } from "vue-router";
import Method from "./components/1.1methods.vue";

const routes = [
    {
        name: 'methods',
        path: '/methods',
        component: Method
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;