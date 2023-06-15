import React from 'react';
import BookList from './booklist';
import AddBook from './addBook';
import '../css/bookStyle.css';

const BookPage = () => (
  <div className="container">
    <BookList />
    <AddBook />
  </div>
);
export default BookPage;
