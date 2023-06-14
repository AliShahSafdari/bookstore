import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import '../css/bookStyle.css';

const BookList = () => {
  const books = useSelector((state) => state.books.booksItem);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Show books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <p>
              Title:
              {book.title}
            </p>
            <p>
              Author:
              {book.author}
            </p>
            <p>
              Category:
              {book.category}
            </p>
            <button type="button" onClick={() => dispatch(removeBook({ item_id: book.item_id }))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>

  );
};
export default BookList;
