import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "../services/shazamCore";
const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(shazamCoreApi.middleware)
});

export default store;
