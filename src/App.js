import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import BookPage from './components/route/books';
import CategoryPage from './components/route/categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/categories" element={<CategoryPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
