import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/bookStyle.css';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({
        title,
        author,
      });
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="book-form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="book-title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book author" className="book-author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>

  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
