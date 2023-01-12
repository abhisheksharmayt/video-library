import { configureStore } from "@reduxjs/toolkit";
import videosReducer from './features/Videos/videosSlice'
import categoryReducer from './features/Form/categorySlice'
import newVideoReducer from "./features/Form/newVideoSlice";
import videoModalReducer from "./features/Modal/videoModalSlice";

export const store = configureStore({
    reducer: {
        categories: videosReducer,
        category: categoryReducer,
        newVideo: newVideoReducer,
        videoModal: videoModalReducer,
    },
})