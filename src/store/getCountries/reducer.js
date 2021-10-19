import { types } from './types';

const initialState = {
    isLoading: false,
    error: null,
    countriesList: null
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.COUNTRIES_START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case types.COUNTRIES_STOP_FETCHING:
            return {
                ...state,
                isLoading: false
            }
        case types.COUNTRIES_SET_FETCHING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.status
            }
        case types.COUNTRIES_FILL_DATA:
            return {
                ...state,
                error: null,
                countriesList: action.payload,
            }
        default:
            return state;
    }
};
