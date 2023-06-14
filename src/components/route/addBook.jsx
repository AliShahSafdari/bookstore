import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';
import '../css/bookStyle.css';

const BookForm = () => {
  const books = useSelector((state) => state.books.booksItem);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        item_id: `item${books.length + 1}`,
        title,
        author,
        category,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div className="book-form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="book-title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book author" className="book-author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>

  );
};

export default BookForm;
