import { createSlice } from '@reduxjs/toolkit';

export const photosSlice = createSlice({
    name: 'photos',
    initialState: null,
    reducers: {
        getPhotos: (state, action) => action.payload
    }
});

console.log(photosSlice);

// Action creators are generated for each case reducer function
export const { getPhotos } = photosSlice.actions;
export default photosSlice.reducer