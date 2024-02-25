import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "../services/shazamCore";
import playerReducer from "./playerSlice"
const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(shazamCoreApi.middleware)
});

export default store;
