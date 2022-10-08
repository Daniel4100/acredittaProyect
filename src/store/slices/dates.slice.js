import { createSlice } from '@reduxjs/toolkit';

export const datesSlice = createSlice({
    name: 'dates',
    initialState: null,
    reducers: {
        getDates: (state, action) => action.payload,
    }
});


// Action creators are generated for each case reducer function
export const { getDates } = datesSlice.actions;
export default datesSlice.reducer