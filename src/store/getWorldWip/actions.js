import { types } from './types';
import { api } from '../../api';

export const worldWipActions = Object.freeze({
    startFetching: () => {
        return {
            type: types.WORLDWIP_START_FETCHING
        }
    },

    stopFetching: () => {
        return {
            type: types.WORLDWIP_STOP_FETCHING
        }
    },

    setFetchingError: (error) => {
        return {
            type: types.WORLDWIP_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fillData: (payload) => {
        return {
            type: types.WORLDWIP_FILL_DATA,
            payload
        }
    },

    filterData: (payload) => {
        return {
            type: types.WORLDWIP_FILTER_DATA,
            payload
        }
    },

    fetchWorldWipAsync: (data) => async (dispatch) => {
        dispatch({
            type: types.WORLDWIP_FETCH_ASYNC
        });

        dispatch(worldWipActions.startFetching());

        const response = await api.getWorldWip(data);

        if (response.status === 200) {
            const data = await response.json();
            dispatch(worldWipActions.fillData(data));
        } else {
            const error = {
                status: response.status
            };
            dispatch(worldWipActions.setFetchingError(error));
        }

        dispatch(worldWipActions.stopFetching());
    }
})