import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'products',
    initialState:{
        selectedCategory:'all',
    },
    reducers:{
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
})

export const {filterCategory} = productSlice.actions;
export default productSlice.reducer;
