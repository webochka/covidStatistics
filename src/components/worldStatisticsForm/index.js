import React from 'react';
import {useSelector} from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {useWorldFilter} from '../../hooks/useWorldFilter'
import {CustomDatePicker} from "../formFields/datePicker"
import {CustomCheckbox} from "../formFields/checkbox"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormHelperText from "@mui/material/FormHelperText";

export const WorldStatisticsForm = () => {
    const { filterData }  = useSelector((state) => state.worldWip);
    const {submitForm} = useWorldFilter();
    const { handleSubmit, control, formState: { errors }, setError } = useForm();
    const onSubmit = data => submitForm(data);
    return (
        <Box component="main" sx={{ p: 3, width: '100%' }}>
            <h2>World statistics</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', width: 350, justifyContent: 'space-between', paddingBottom: 4}}>
                    <div>
                        <Controller
                            control={control}
                            name="from"
                            defaultValue = {filterData.from}
                            value={filterData.from}
                            rules={{ required: true }}
                            render={({ field, ref }) => <CustomDatePicker {...field} label="date from" ref={ref} />}
                        />
                        {errors.from && <FormHelperText sx={{color: 'red'}}>This field is required</FormHelperText>}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="to"
                            defaultValue = {filterData.to}
                            value={filterData.to}
                            rules={{ required: true }}
                            render={({ field, ref }) => <CustomDatePicker {...field} label="date to" ref={ref} />}
                        />
                        {errors.to && <FormHelperText sx={{color: 'red'}}>This field is required</FormHelperText>}
                    </div>
                </Box>
                <Box sx={{ display: 'flex', width: 400, justifyContent: 'space-around', paddingBottom: 2, marginLeft:'-15px'}}>
                    <Controller
                        control={control}
                        name="recovered"
                        defaultValue = {filterData.recovered}
                        render={({ field, ref }) => <CustomCheckbox {...field} label="recovered" ref={ref} />}
                    />
                    <Controller
                        control={control}
                        name="confirmed"
                        defaultValue = {filterData.confirmed}
                        render={({ field, ref }) => <CustomCheckbox {...field} label="confirmed" ref={ref} />}
                    />
                    <Controller
                        control={control}
                        name="deaths"
                        defaultValue = {filterData.deaths}
                        render={({ field, ref }) => <CustomCheckbox {...field} label="deaths" ref={ref} />}
                    />
                </Box>
                <Button
                    sx={{ width: 150, height: 40, margin: '20px 0 40px' }}
                    variant="contained"
                    type="submit"
                >apply</Button>
            </form>
        </Box>
    );
};
