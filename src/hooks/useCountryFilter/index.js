import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "../useParams";
import { liveByCountryActions } from '../../store/liveByCountry/actions';

export const useCountryFilter = () => {
    const dispatch = useDispatch();
    const { filterData }  = useSelector((state) => state.liveByCountry);
    const {setParams} = useParams()

    useEffect(() => {setParams(filterData)}, [filterData])

    const submitForm = (data)  => {
         const {date, country} = data;
         let formatDate  = (new Date(date).toISOString())

        dispatch(liveByCountryActions.filterData({...data, date: formatDate}))

        if(country !== filterData.country || formatDate !== filterData.date) {
            dispatch(liveByCountryActions.fetchLiveByCountryAsync({...data, date: formatDate}));
         }
    }

    const liveByCountryfilter = (data)  => {
        if(!data) return;
        const result = [...data.reduce((r, o) => {
            const key = o.Date;

            const item = r.get(key) || Object.assign({}, o, {
                totalConfirmed: 0,
                totalRecovered: 0,
                totalDeaths: 0
            });

            item.totalConfirmed += o.Confirmed;
            item.totalRecovered += o.Recovered;
            item.totalDeaths += o.Deaths;

            return r.set(key, item);

        }, new Map).values()];

        return Object.values(result)
    }

    return {
       submitForm,
       liveByCountryfilter,
    }
}