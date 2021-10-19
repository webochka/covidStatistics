import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const RadioButtons = ({ value, onChange, label}) => {
    return (
        <FormControl component="fieldset">
            <RadioGroup
                value={value}
                onChange={(data) => {onChange(data)}}
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                sx={{ marginTop: '20px' }}
            >
                <FormControlLabel value="recovered" control={<Radio />} label="recovered" />
                <FormControlLabel value="confirmed" control={<Radio />} label="confirmed" />
                <FormControlLabel value="deaths" control={<Radio />} label="deaths" />
            </RadioGroup>
        </FormControl>
    )
}