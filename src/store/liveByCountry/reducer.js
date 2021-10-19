import { types } from './types';

const initialState = {
    isLoading: false,
    error: null,
    liveByCountryData: null,
    filterData: {
        country: false,
        date: false,
        case: false,
    },
};

export const liveByCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIVEBYCOUNTRY_START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case types.LIVEBYCOUNTRY_STOP_FETCHING:
            return {
                ...state,
                isLoading: false
            }
        case types.LIVEBYCOUNTRY_SET_FETCHING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.status
            }
        case types.LIVEBYCOUNTRY_FILL_DATA:
            return {
                ...state,
                error: null,
                liveByCountryData: action.payload,
            }
        case types.LIVEBYCOUNTRY_FILTER_DATA:
            return {
                ...state,
                filterData: action.payload,
            }
        default:
            return state;
    }
};
