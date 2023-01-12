import { createSlice } from "@reduxjs/toolkit";
import buckets from '../../testData'


const initialState = {
    categories: buckets,
    watchHistory: [],
    isLoading: false,
}


const videosSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        removeCard : (state, action)=>{
            const {category, id} = action.payload;
            state.categories.forEach(ele=>{
                console.log(ele);
                if(ele.categoryName === category){
                    const newVideoList = ele.videos.filter((video)=> video.id != id);
                    ele.videos = newVideoList;
                }
            })
        },
        removeBucket : (state, action)=>{
            state.categories = state.categories.filter((ele)=>
                ele.categoryName != action.payload
            )
        } 
    },
})

// console.log(videosSlice);
export const {removeCard, removeBucket} = videosSlice.actions;

export default videosSlice.reducer;