import { types } from './types';
import { api } from '../../api';

export const liveByCountryActions = Object.freeze({
    startFetching: () => {
        return {
            type: types.LIVEBYCOUNTRY_START_FETCHING
        }
    },

    stopFetching: () => {
        return {
            type: types.LIVEBYCOUNTRY_STOP_FETCHING
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.LIVEBYCOUNTRY_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fillData: (payload) => {
        return {
            type: types.LIVEBYCOUNTRY_FILL_DATA,
            payload
        }
    },

    filterData: (payload) => {
        return {
            type: types.LIVEBYCOUNTRY_FILTER_DATA,
            payload
        }
    },

    fetchLiveByCountryAsync: (data) => async (dispatch) => {
        dispatch({
            type: types.LIVEBYCOUNTRY_FETCH_ASYNC
        });

        dispatch(liveByCountryActions.startFetching());

        const response = await api.liveByCountry(data);

        if (response.status === 200) {
            const data = await response.json();
            dispatch(liveByCountryActions.fillData(data));
        } else {
            const error = {
                status: response.status
            };

            dispatch(liveByCountryActions.setFetchingError(error));
        }

        dispatch(liveByCountryActions.stopFetching());
    }
})