import React from 'react';
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";

//libs
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';

export const AreaChart = () => {
    const { data, filterData }  = useSelector((state) => state.worldWip);
    return (
        <>
         { data &&
            <Box>
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart
                        width={800}
                        height={350}
                        data={data}
                        syncId="anyId"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='Date'/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        {filterData.confirmed &&
                        <Line type="monotone" dataKey="NewConfirmed" fill="#8884d8" stroke="#8884d8" activeDot={{r: 8}}/>}
                        {filterData.deaths &&
                        <Line type="monotone" dataKey="NewDeaths" fill="#82ca9d" stroke="#82ca9d" activeDot={{r: 8}}/>}
                        {filterData.recovered &&
                        <Line type="monotone" dataKey="NewRecovered" fill="#ffc658" stroke="#ffc658" activeDot={{r: 8}}/>}
                    </LineChart>
                </ResponsiveContainer>
            </Box>
         }
        </>
    );
}
