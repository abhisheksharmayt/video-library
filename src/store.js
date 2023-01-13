import { configureStore } from "@reduxjs/toolkit";
import videosReducer from './features/Videos/videosSlice'
import categoryReducer from './features/Form/categorySlice'
import newVideoReducer from "./features/Form/newVideoSlice";
import videoModalReducer from "./features/Modal/videoModalSlice";
import editVideoModalReducer from "./features/Modal/editVideoModalSlice";
import updateCategoryReducer from "./features/Form/updateCategorySlice";
import editCategoryModalReducer from "./features/Modal/editCategoryModalSlice";


export const store = configureStore({
    reducer: {
        categories: videosReducer,
        category: categoryReducer,
        newVideo: newVideoReducer,
        videoModal: videoModalReducer,
        editVideoModal: editVideoModalReducer,
        updateCategory: updateCategoryReducer,
        editCategoryModal: editCategoryModalReducer,
    },
})