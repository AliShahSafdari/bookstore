import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookPage from './components/route/Books';
import CategoryPage from './components/route/Categories';

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
