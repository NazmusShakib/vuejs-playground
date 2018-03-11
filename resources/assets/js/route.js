import Login from './components/login/LoginComponent.vue';

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
        component: Login
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