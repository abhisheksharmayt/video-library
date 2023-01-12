import { createSlice } from "@reduxjs/toolkit";
import buckets from '../../testData'


const initialState = {
    categories: buckets,
    watchHistory: [],
    isLoading: false,
}


const videosSlice = createSlice({
    name: 'categories',
    initialState
})

// console.log(videosSlice);

export default videosSlice.reducer;