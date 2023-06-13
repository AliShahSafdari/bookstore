import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'Catagories',
  initialState: { categories: [] },
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction' ? 'Under construction' : state.categories;
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
