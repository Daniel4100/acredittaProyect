import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slices/photos.slice";
import datesSlice from "./slices/dates.slice";
import datesObjSlice from "./slices/datesObj.slice";
import photosDataSlice from "./slices/photosData.slice";

export default configureStore({
  reducer: {
    photosSlice,
    datesSlice,
    datesObjSlice,
    photosDataSlice
  },
})
