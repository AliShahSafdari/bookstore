import { createSlice } from '@reduxjs/toolkit';
import bookItems from './bookItem';

const initialState = {
  booksItem: bookItems,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksItem.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemIdToRemove = action.payload.item_id;
      state.booksItem = state.booksItem.filter((book) => book.item_id !== itemIdToRemove);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
