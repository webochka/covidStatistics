import React from 'react';
import {Sidebar} from "../../components/sidebar";
import {CountryStatisticsForm} from "../../components/countryStatisticsForm";
import {BarChart} from "../../components/barChart";
import Box from '@mui/material/Box';

export const CountryStatistics = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <Sidebar/>
            <Box sx={{width: '80%', padding: '0 20px'}}>
                <CountryStatisticsForm/>
                <BarChart/>
            </Box>
        </Box>
    );
};
