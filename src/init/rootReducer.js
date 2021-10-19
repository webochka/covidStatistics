import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { history } from './middleware';
import { worldWipReducer as worldWip} from '../store/getWorldWip/reducer';
import { liveByCountryReducer as liveByCountry} from '../store/liveByCountry/reducer';
import { countriesReducer as countries} from '../store/getCountries/reducer';
const router = connectRouter(history);

export const rootReducer = combineReducers({
    router,
    worldWip,
    countries,
    liveByCountry
});
