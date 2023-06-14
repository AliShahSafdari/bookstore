import React from 'react';
import BookList from './booklist';
import BookForm from './addBook';
import '../css/bookStyle.css';

const BookPage = () => (
  <div className="container">
    <BookForm />
    <BookList />
  </div>
);
export default BookPage;
