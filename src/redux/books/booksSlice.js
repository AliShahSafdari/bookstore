import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { act } from 'react-dom/test-utils';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lBC1u0w8Y5NTm74FEW9B/books/';

const initialState = {
  booksItem: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk('books/fetchData', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookInfo) => {
  try {
    const response = await axios.post(url, bookInfo);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add book');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(url + bookId);
    return bookId;
  } catch (error) {
    throw new Error('Failed to remove book');
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksItem.push(action.payload);
    },
    removeBook: (state, action) => {
      state.booksItem = state.booksItem.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksItem = Object.entries(action.payload)
          .flatMap(([key, value]) => value.map((book) => ({ ...book, item_id: key })));
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBookToApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = true;
        state.booksItem = state.booksItem.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
