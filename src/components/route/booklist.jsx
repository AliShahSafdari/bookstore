import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchData } from '../../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      {books.booksItem.map((book) => (
        <div key={book.key}>
          <h4>
            Category :
            {book.category}
          </h4>
          <h2>
            {' '}
            Title :
            {book.title}
          </h2>
          <p>
            Author:
            {' '}
            {book.author}
          </p>
          <button type="button" id={book.item_id} onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>

        </div>
      ))}
    </div>
  );
};

export default BookList;
