import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import BookPage from './components/route/Books.jsx';
import CategoryPage from './components/route/Categories.jsx';

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
