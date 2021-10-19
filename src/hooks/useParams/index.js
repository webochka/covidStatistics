import {useHistory} from "react-router-dom";

export const useParams = (data) => {
        let history = useHistory();
        const setParams = (data) => {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(data)) {
                if(value) {
                    params.append(`${key}`, `${value}`)
                } else {
                    params.delete(`${key}`)
                }
            }
            history.push({search: params.toString()})
        }

    return {
        setParams
    }
}