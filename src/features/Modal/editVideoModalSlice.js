import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditVideoModalOpen: false,
}

const editVideoModalSlice = createSlice({
    name: 'edit_video_modal',
    initialState,
    reducers: {
        openEditVideoModal: (state) => { state.isEditVideoModalOpen = true },
        closeEditVideoModal: (state) => { state.isEditVideoModalOpen = false },
    }
})

export const { openEditVideoModal, closeEditVideoModal } = editVideoModalSlice.actions;

export default editVideoModalSlice.reducer;