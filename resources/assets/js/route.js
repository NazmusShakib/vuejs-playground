import Home from './components/HomeComponent.vue';
import Portfolio from './components/portfolio/PortfolioComponent.vue';
import Section from './components/section/SectionComponent.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/sections', component: Section }
];