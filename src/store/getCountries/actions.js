import { types } from './types';
import { api } from '../../api';

export const getCountriesActions = Object.freeze({
    startFetching: () => {
        return {
            type: types.COUNTRIES_START_FETCHING
        }
    },

    stopFetching: () => {
        return {
            type: types.COUNTRIES_STOP_FETCHING
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.COUNTRIES_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fillData: (payload) => {
        return {
            type: types.COUNTRIES_FILL_DATA,
            payload
        }
    },
    fetchCountriesAsync: () => async (dispatch) => {
        dispatch({
            type: types.COUNTRIES_FETCH_ASYNC
        });

        dispatch(getCountriesActions.startFetching());

        const response = await api.getCountries();

        if (response.status === 200) {
            const data = await response.json();
            dispatch(getCountriesActions.fillData(data));
        } else {
            const error = {
                status: response.status
            };
            dispatch(getCountriesActions.setFetchingError(error));
        }

        dispatch(getCountriesActions.stopFetching());
    }
})