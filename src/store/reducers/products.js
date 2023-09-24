import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => [action.payload],
    },
});

export const { addProduct } = productReducer.actions;
export default productReducer.reducer;
