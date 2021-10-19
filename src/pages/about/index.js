import React from 'react';
import Box from '@mui/material/Box';
import {Sidebar} from "../../components/sidebar";
import {AboutTabs} from "../../components/aboutTabs";

export const About = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <Sidebar/>
            <Box sx={{width: '100%'}}>
               <AboutTabs/>
            </Box>
        </Box>
    );
}