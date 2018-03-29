import Login from './components/login/LoginComponent.vue';
import Register from './components/login/registerComponent.vue';

import Home from './components/HomeComponent.vue';
import Portfolio from './components/portfolio/PortfolioComponent.vue';
import Sections from './components/section/Sections.vue';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/sections',
        component: Sections
    }
];