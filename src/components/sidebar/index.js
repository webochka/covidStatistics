import React from 'react';
import {Link} from 'react-router-dom';
import { routes } from '../../navigation/routes';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from "@mui/material/Box";

export const Sidebar = () => {
    return (
        <Box sx={{ minHeight: '100vh', width: '15%', maxWidth:300, bgcolor: 'primary.main'}}>
                <List>
                    {Object.values(routes).map(({url, name}) => (
                        <ListItem key={url} button>
                            <ListItemText>
                                <Link to={url}>{name}</Link>
                            </ListItemText>
                        </ListItem>
                    ))
                    }
                </List>
        </Box>
    );
};
