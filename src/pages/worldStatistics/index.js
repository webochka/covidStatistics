import React from 'react';
import {Sidebar} from "../../components/sidebar";
import {WorldStatisticsForm} from "../../components/worldStatisticsForm";
import {AreaChart} from "../../components/areaChart";
import Box from '@mui/material/Box';

export const WorldStatistics = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <Sidebar/>
            <Box sx={{ width: '80%', padding: '0 20px'}}>
                <WorldStatisticsForm/>
                <AreaChart/>
            </Box>
        </Box>
    );
}