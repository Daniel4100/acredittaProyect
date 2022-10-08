import { createSlice } from '@reduxjs/toolkit';

export const photosDataSlice = createSlice({
    name: 'photosData',
    initialState: {
        camaraName: "MAST",
        fecha: "2022-09-22",
        roverName: "curiosity"
    },
    reducers: {
        getPhotoData: (state, action) => action.payload
    }
});


// Action creators are generated for each case reducer function
export const { getPhotoData } = photosDataSlice.actions;
export default photosDataSlice.reducer