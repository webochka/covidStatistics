import React from 'react';
import {useSelector} from "react-redux";
import {useCountryFilter} from "../../hooks/useCountryFilter"
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const BarChart = () => {
        const {liveByCountryData, filterData }  = useSelector((state) => state.liveByCountry);
        const {liveByCountryfilter} = useCountryFilter();
        return (
            <>
             {liveByCountryData && liveByCountryData.length > 0 &&
                <ResponsiveContainer width="100%" height={350}>
                    <Chart
                        width={800}
                        height={350}
                        data={liveByCountryfilter(liveByCountryData)}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="Date"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        {console.log(filterData.status)}
                        {filterData.status === "confirmed" && <Bar dataKey="totalConfirmed" fill="#8884d8"/>}
                        {filterData.status === "deaths" && <Bar dataKey="totalDeaths" fill="#8884d8"/>}
                        {filterData.status === "recovered" && <Bar dataKey="totalRecovered" fill="#82ca9d"/>}
                    </Chart>
                </ResponsiveContainer>}
                {liveByCountryData && liveByCountryData.length === 0 && <h3>There are no results for your query</h3>}
            </>
        );
}
