// Config
import { root } from './config';

export const api = Object.freeze({
    getWorldWip: ({from, to}) => {
        return fetch(`${root}/world?from=${from}&to=${to}`, {
            method: 'GET',
        });
    },

    getCountries: () => {
        return fetch(`${root}/countries`, {
            method: 'GET',
        });
    },

    liveByCountry: ({country, status, date}) => {
        return fetch(`${root}/live/country/${country}/status/${status}/date/${date}`, {
            method: 'GET',
        });
    }
});
