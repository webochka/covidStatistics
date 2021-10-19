import { types } from './types';

const initialState = {
    isLoading: false,
    error: null,
    data: null,
    filterData: {
        from: '',
        to: '',
        recovered: false,
        confirmed: false,
        deaths: false,
    },
};

export const worldWipReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.WORLDWIP_START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case types.WORLDWIP_STOP_FETCHING:
            return {
                ...state,
                isLoading: false
            }
        case types.WORLDWIP_SET_FETCHING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.status
            }
        case types.WORLDWIP_FILL_DATA:
            return {
                ...state,
                error: null,
                data: action.payload,
            }
        case types.WORLDWIP_FILTER_DATA:
            return {
                ...state,
                filterData: action.payload,
            }
        default:
            return state;
    }
};
