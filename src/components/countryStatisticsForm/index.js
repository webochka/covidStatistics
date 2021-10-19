import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {useSelector} from "react-redux";
import {CustomDatePicker} from "../formFields/datePicker"
import {RadioButtons} from "../formFields/radioButtons"
import {CustomSelect} from "../formFields/select"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import {useCountryFilter} from "../../hooks/useCountryFilter";
import {useGetCountry} from "../../hooks/useGetCountry";

export const CountryStatisticsForm = () => {
    const { countriesList }  = useSelector((state) => state.countries);
    const { filterData }  = useSelector((state) => state.liveByCountry);
    const { handleSubmit, control, formState: { errors } } = useForm();
    const {submitForm} = useCountryFilter();
    const onSubmit = data => submitForm(data);
    useGetCountry();
    return (
        <Box component="main" sx={{ p: 3, width: '100%' }}>
            <h2>Country statistics</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="country"
                    defaultValue = {filterData.country}
                    value={filterData.country}
                    rules={{ required: true }}
                    render={({ field, ref }) => <CustomSelect {...field} options={countriesList} label="country" ref={ref} />}
                />
                {errors.country && <FormHelperText sx={{color: 'red'}}>This field is required</FormHelperText>}
                <Controller
                    control={control}
                    name="date"
                    defaultValue = {filterData.date}
                    value={filterData.date}
                    rules={{ required: true }}
                    render={({ field, ref }) => <CustomDatePicker {...field} label="date from" ref={ref} />}
                />
                {errors.date && <FormHelperText sx={{color: 'red'}}>This field is required</FormHelperText>}
                <Box sx={{ paddingBottom: 2}}>
                    <Controller
                        control={control}
                        name="status"
                        defaultValue = {filterData.status}
                        value={filterData.status}
                        rules={{ required: true }}
                        render={({ field, ref }) => <RadioButtons {...field} label="case" ref={ref} />}
                    />
                    {errors.status && <FormHelperText sx={{color: 'red'}}>This field is required</FormHelperText>}
                </Box>
                <Button
                    sx={{ width: 150, height: 40, margin: '10px 0 40px' }}
                    variant="contained"
                    type="submit"
                >apply</Button>
            </form>
        </Box>
    );
};
