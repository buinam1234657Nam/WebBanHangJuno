import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const informationUse = createSlice({
    name: 'informationUse',
    initialState,
    reducers: {
        addUse: (state, action) => [...state, action.payload],
    },
});
export const { addUse } = informationUse.actions;
export default informationUse.reducer;
