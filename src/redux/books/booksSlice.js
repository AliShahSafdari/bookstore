import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksItem: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksItem.push(action.payload);
    },
    removeBook: (state, { payload }) => {
      state.booksItem = state.booksItem.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
