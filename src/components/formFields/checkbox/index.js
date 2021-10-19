import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export const CustomCheckbox = ({ value, onChange, label}) => {
    return (
        <FormGroup  sx={{ width: 'fit-content'}}>
            <FormControlLabel control={
                <Checkbox
                    value = {value}
                    defaultChecked={value}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
                    onChange={onChange}
                />
            } label={label} />
        </FormGroup>
    )
}