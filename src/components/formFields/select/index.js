import React from 'react';
import FormGroup from "@mui/material/FormGroup";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const CustomSelect = ({ value, onChange, label, options}) => {
    return (
        <FormGroup sx={{ m: 1, minWidth: 200, width: 'fit-content', marginLeft: '-3px'}}>
            <p>{label}</p>
            <Select
                labelId={label}
                value={value}
                onChange={(date) => {onChange(date)}}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{height: 28, width: 157, fontSize: 14}}
            >
            { options && options.map((item, index) => ( <MenuItem key={index} value={item.Slug}>{item.Slug}</MenuItem>))}
            </Select>
        </FormGroup>
    )
}