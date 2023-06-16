import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookToApi, addBook } from '../../redux/books/booksSlice';
import '../css/addBooks.css';
import '@fontsource/roboto-slab/latin-400.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const data = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Science-fiction',
  };
  const handleSubmit = () => {
    dispatch(addBookToApi(data));
    dispatch(addBook(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="FormContianer-all">
      <div className="FormContianer">
        <div className="title">
          <h3>ADD NEW BOOK</h3>
        </div>

        <form className="form">
          <div className="input-container">
            <input value={title} type="text" id="title" placeholder="Book Title Here..." onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="input-container">
            <input value={author} type="text" id="name" placeholder="Author Name Here..." onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="input-container">
            <button type="button" value="AddNew" onClick={handleSubmit}> ADD BOOK </button>
          </div>
        </form>
      </div>

    </div>
  );
};
export default AddBook;
