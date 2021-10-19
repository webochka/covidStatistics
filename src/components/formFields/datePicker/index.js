import React from 'react';
import DatePicker from "react-multi-date-picker";
import FormGroup from "@mui/material/FormGroup";

export const CustomDatePicker = ({ value, onChange, label}) => {
    return (
        <FormGroup  sx={{ width: 'fit-content'}}>
                <p>{label}</p>
                <DatePicker
                    value={value}
                    onChange={(date) => {onChange(date.format())}}
                    format={"MM/DD/YYYY"}
                    maxDate={new Date()}
                    placeholder={label}
                />
        </FormGroup>
    )
}