import React from 'react';
import '../css/bookStyle.css';

const BookList = (prop) => {
  const { book, deleteBook } = prop;
  return (
    <li key={book.id} className="book-list">
      <h2>{book.title}</h2>
      <p>
        Author:
        {book.author}
      </p>
      <button type="button" onClick={() => deleteBook(book.id)}>Remove</button>
    </li>
  );
};
export default BookList;
