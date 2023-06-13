import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories:[],
}

const categorySlice = createSlice({
    name: 'Catagories',
    initialState,
    status: 'Under construction',
    reducers: {
        checkStatus: initialState,
    },
});
    
export const { checkStatus} = categorySlice.actions;
export default bookSlice.reducer;