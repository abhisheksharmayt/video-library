import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    video_url: "",
    videoCategory: "",
}

const newVideoSlice = createSlice({
    name: 'newVideo',
    initialState,
    reducers:{
        setTitle : (state, action)=>{
            state.title = action.payload;
        },
        setVideoUrl : (state,action)=>{
            state.video_url = action.payload;
        },
        setVideoCategory: (state, action)=>{
            state.videoCategory = action.payload;
        }
    }
})

export const {setTitle, setVideoCategory, setVideoUrl} = newVideoSlice.actions;

export default newVideoSlice.reducer;