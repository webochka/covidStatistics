import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountriesActions} from "../../store/getCountries/actions";

export const useGetCountry = () => {
    const dispatch = useDispatch();
    const { countriesList }  = useSelector((state) => state.countries);

    useEffect(() => {
        if(!countriesList) {
            dispatch(getCountriesActions.fetchCountriesAsync());
        }
    }, [dispatch]);
}