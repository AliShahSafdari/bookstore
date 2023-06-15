import React from 'react';
import BookList from './booklist';
import AddBook from './addBook';
import '../css/bookStyle.css';

const BookPage = () => (
  <div className="container">
    <AddBook />
    <BookList />
  </div>
);
export default BookPage;
