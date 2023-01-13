import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    title: "",
    video_url: "",
    videoCategory: "",
    categoryId: "",
}

const newVideoSlice = createSlice({
    name: 'newVideo',
    initialState,
    reducers:{
        setId: (state,action)=>{
            state.id = action.payload;
        },
        setTitle : (state, action)=>{
            state.title = action.payload;
        },
        setVideoUrl : (state,action)=>{
            state.video_url = action.payload;
        },
        setVideoCategory: (state, action)=>{
            state.videoCategory = action.payload;
        },
    }
})

export const {setId, setTitle, setVideoCategory, setVideoUrl} = newVideoSlice.actions;

export default newVideoSlice.reducer;