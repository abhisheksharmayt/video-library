import { createSlice } from "@reduxjs/toolkit";
import buckets from '../../testData'


const initialState = {
    categories: buckets,
    watchHistory: [],
    isLoading: false,
    currentPlaying: {},
}


const videosSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            if (action.payload.length > 0) {
                const newCategory = {
                    categoryId: String(state.categories.length*10 + 11), 
                    categoryName: action.payload,
                    videos: [],
                }
                state.categories = [ ...state.categories, newCategory ];
            }
        },
        addNewVideo: (state, action)=>{
            let {title, video_url, videoCategory} = action.payload;
            if(title && video_url){
                if(!videoCategory) videoCategory = state.categories[0].categoryName;
                // console.log(title,video_url, videoCategory);
                state.categories.forEach((ele)=>{
                    if(ele.categoryName === videoCategory){
                        const newVideoList = [...ele.videos, {id: String(ele.videos.length+1), title, video_url} ]
                        ele.videos = newVideoList;
                    }
                })
            }
        },
        removeCard: (state, action) => {
            const { category, id } = action.payload;
            state.categories.forEach(ele => {
                // console.log(ele);
                if (ele.categoryName === category) {
                    const newVideoList = ele.videos.filter((video) => video.id != id);
                    ele.videos = newVideoList;
                }
            })
        },
        removeBucket: (state, action) => {
            state.categories = state.categories.filter((ele) =>
                ele.categoryName != action.payload
            )
        },
        addCurrentPlaying: (state, action)=>{
            const {id, title, video_url} = action.payload;
            const currentTimeAndDate = String(new Date)
            const currentVideo = { id, title, video_url, date: currentTimeAndDate.slice(0,-31) };
            state.currentPlaying = currentVideo;
            
            const newHistory = state.watchHistory.filter((video)=> video.id != id);
            newHistory.unshift(currentVideo);
            state.watchHistory = newHistory;
        },
        updateVideo: (state, action)=>{
            const {id, title, video_url, videoCategory } = action.payload;

            if (title && video_url && videoCategory) {
                state.categories.forEach((ele) => {
                    if (ele.categoryName === videoCategory) {
                        for(let video of ele.videos){
                            if(video.id === id){
                                // const updatedVideo = { id, title, video_url };
                                // video = updatedVideo;
                                // console.log(video);
                                video.title = title;
                                video.video_url = video_url
                            }
                        }
                        // ele.videos.forEach((video)=>{
                        //     if(video.id === id ){
                        //         const updatedVideo = {id, title, video_url};
                        //         video = updatedVideo;
                        //         console.log(video);
                        //     }
                        // })x
                    }
                })
            }
        },
        updateCategory:(state,action)=>{
            const { prevCategoryName, newCategoryName } = action.payload;
            // console.log(prevCategoryName, newCategoryName);
            if(prevCategoryName && newCategoryName){
                state.categories.forEach((current)=>{
                    if(current.categoryName === prevCategoryName){
                        current.categoryName = newCategoryName;
                    }
                })
            }
        },
        clearWatchHistory: (state)=>{
            state.watchHistory = [];
        },
        changeCategory: (state, action)=>{
            const { sourceCategory, videoSourceIndex, destinationCategory, videoDestinationIndex} = action.payload;
            let add;
            state.categories.forEach((current)=>{
                if(current.categoryId == sourceCategory){
                    add = current.videos[videoSourceIndex];
                    current.videos.splice(videoSourceIndex, 1)
                }
            })
            state.categories.forEach((current)=>{
                if(current.categoryId == destinationCategory){
                    current.videos.splice(videoDestinationIndex, 0, add);
                }
            })
        }
    },
})

// console.log(videosSlice);
export const { removeCard, removeBucket, addCategory, addNewVideo, addCurrentPlaying, updateVideo, clearWatchHistory, updateCategory, changeCategory } = videosSlice.actions;

export default videosSlice.reducer;