import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId : "",
    newCategoryName : "",
    prevCategoryName : "",
}

const updateCategorySlice = createSlice({
    name: 'updateCategory',
    initialState,
    reducers: {
        setCategoryId : (state,action)=>{
            state.categoryId = action.payload;
        },
        setNewCategoryName : (state,action)=>{
            state.newCategoryName = action.payload;
        },
        setPrevCategoryName : (state,action)=>{
            state.prevCategoryName = action.payload;
        }
    }
})

export const { setCategoryId, setNewCategoryName, setPrevCategoryName } = updateCategorySlice.actions;

export default updateCategorySlice.reducer;