import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import UserFake from "@/pages/UserFake.vue";
import PostIdPage from "@/pages/PostIdPage.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/user',
        component: UserFake
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
    },


]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router