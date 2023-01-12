import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVideoModalOpen : false,
}

const videoModalSlice = createSlice({
    name: 'video_modal',
    initialState,
    reducers:{
        openVideoModal: (state)=> {state.isVideoModalOpen = true},
        closeVideoModal: (state)=> {state.isVideoModalOpen = false},
    }
})

export const {openVideoModal, closeVideoModal} = videoModalSlice.actions;

export default videoModalSlice.reducer;