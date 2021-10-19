import {useDispatch, useSelector} from "react-redux";
import { worldWipActions } from '../../store/getWorldWip/actions';
import {useEffect} from "react";
import {useParams} from "../useParams";

export const useWorldFilter = () => {
    const dispatch = useDispatch();
    const { filterData }  = useSelector((state) => state.worldWip);
    const {setParams} = useParams();

     useEffect(() => {setParams(filterData)}, [filterData])

    const submitForm = (data)  => {
        const {from, to} = data
        let formatDate = {
            from: new Date(from).toISOString(),
            to: new Date(to).toISOString(),
        }

        if(formatDate.from!==filterData.from || formatDate.to!==filterData.to) {
            dispatch(worldWipActions.fetchWorldWipAsync({...formatDate}));
        }

        dispatch(worldWipActions.filterData({
            ...data,
            ...formatDate,
        }))
    }
    return {
       submitForm,
    }
}