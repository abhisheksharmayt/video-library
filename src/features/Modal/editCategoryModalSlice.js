import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditCategoryModalOpen: false,
}

const editCategoryModalSlice = createSlice({
    name: 'edit_category_modal',
    initialState,
    reducers: {
        openEditCategoryModal: (state) => { state.isEditCategoryModalOpen = true },
        closeEditCategoryModal: (state) => { state.isEditCategoryModalOpen = false },
    }
})

export const { openEditCategoryModal, closeEditCategoryModal } = editCategoryModalSlice.actions;

export default editCategoryModalSlice.reducer;