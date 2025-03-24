import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactPage from "./components/ContactPage.vue";
import SkillsPage from "./components/SkillsPage.vue";
import ProjectsPage from "./components/ProjectsPage.vue";

const routes = [
    {
        path: '/portfolio/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('../views/AboutView.vue')
        component: HomePage
    },
    {
        path: '/portfolio/about/',
        name: 'About Me',
        component: AboutMe
    },
    {
        path: '/portfolio/skills/',
        name: 'Skills and Experience',
        component: SkillsPage
    },
    {
        path: '/portfolio/contact/',
        name: 'Contact Me',
        component: ContactPage
    },
    {
        path: '/portfolio/projects/',
        name: 'My Projects',
        component: ProjectsPage
    }
    // {
    //     path: '/postevent',
    //     name: 'postEvent',
    //     component: PostEventView,
    //     beforeEnter: (to, from, next) => {
    //         const { user } = useAuth();
    //         //if a user is signed in, allow them to access this route
    //         if (user.value)
    //         {
    //             next();
    //         }
    //         //otherwise send them to the sign in page
    //         else{
    //             next('/signin')
    //         }
    //     }
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
