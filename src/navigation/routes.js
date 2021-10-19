 import { About } from '../pages/about';
 import { CountryStatistics } from '../pages/countryStatistics';
 import { WorldStatistics } from '../pages/worldStatistics';

export const routes = Object.freeze({
    about: {
        url: `/`,
        page: About,
        name: 'About'
    },
    world: {
        url: `/world-statistics`,
        page: WorldStatistics,
        name: 'World statistics'
    },
    country: {
        url: `/country-statistics`,
        page: CountryStatistics,
        name: 'Country statistics'
    },
});
