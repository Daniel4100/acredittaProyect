import { createSlice } from '@reduxjs/toolkit';

export const datesObjSlice = createSlice({
    name: 'template',
    initialState: {
        startDate: '2022-10-02',
        endDate: '2022-10-08',
    },
    reducers: {
        getDatesObj : (state, action) => action.payload,
    }
});


// Action creators are generated for each case reducer function
export const { getDatesObj } = datesObjSlice.actions;
export default datesObjSlice.reducer