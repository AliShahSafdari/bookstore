import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchData } from '../../redux/books/booksSlice';
import '../css/booklist.css';
import '@fontsource/roboto-slab/latin-400.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const bookLists = books.booksItem.map((book, index) => ({
    ...book,
    item_id: book.item_id,
    key: `${book.item_id}-${index}`,
  }));
  return (
    <div className="container-all">
      {bookLists.map((book) => (
        <div key={book.key} className="container-item">
          <div className="first-item">

            <div className="books-detail-1">
              <small className="category">
                {book.category}
              </small>
              <h2 className="book-title">
                {book.title}
              </h2>
              <small className="book-author">
                {book.author}
              </small>

            </div>
            <div className="books-detail-2">
              <button type="button" id="comments">Comments</button>
              <button type="button" id={book.item_id} onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
              <button type="button" id="edit">Edit</button>
            </div>

          </div>
          <div className="second-item">
            <div className="state-circle">
              <div className="regtangle">
                <svg>
                  <circle cx="25" cy="25" r="25" />
                  <circle cx="25" cy="25" r="25" />
                </svg>
              </div>
            </div>
            <div className="state-percentage">
              <span className="percentage">64%</span>
              <span className="complete"> Completed</span>
            </div>
          </div>
          <div className="thrid-item">
            <span className="chapeter-title"> CURRENT CHAPTER</span>
            <span className="chapeter-content">Chapter 17</span>
            <button type="button" className="upate">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
