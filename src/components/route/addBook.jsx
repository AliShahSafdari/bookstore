import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookToApi, addBook } from '../../redux/books/booksSlice';

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
    <div className="book-form">
      <div>
        <h3>ADD NEW BOOK</h3>
      </div>
      <form>
        <input value={title} type="text" id="title" placeholder="Book Title Here..." onChange={(e) => setTitle(e.target.value)} />
        <input value={author} type="text" id="name" placeholder="Author Name Here..." onChange={(e) => setAuthor(e.target.value)} />
        <button type="button" value="AddNew" onClick={handleSubmit}> AddBook </button>
      </form>
    </div>
  );
};
export default AddBook;
