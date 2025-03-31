import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactPage from "./components/ContactPage.vue";
import SkillsPage from "./components/SkillsPage.vue";
import ProjectsPage from "./components/ProjectsPage.vue";
import ProjectComponent from "./components/ProjectComponent.vue";

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
        component: ProjectsPage,
    },
    // {
    //     path: '/portfolio/project/:project',
    //     name: 'My Projects',
    //     component: ProjectComponent,
    //     props: true
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.addRoute("My Projects", {
    path: ":project",
    name: "P",
    component: ProjectComponent,
    props: true
})

export default router;
