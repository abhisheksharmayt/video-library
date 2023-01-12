import { configureStore } from "@reduxjs/toolkit";
import videosReducer from './features/Videos/videosSlice'

export const store = configureStore({
    reducer: {
        categories: videosReducer,
    },
})