import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './css/style.css';

const CustomLink = (prop) => {
  const { to, children } = prop;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Navbar = () => (
  <nav className="nav">
    <div className="nav-title">
      <h1 className="site-title">Bookstroe CMS</h1>
      <ul>
        <CustomLink to="/">BOOKS</CustomLink>
        <CustomLink to="/categories">CATEGORIES</CustomLink>
      </ul>
    </div>
    <div>
      <h3>Logo</h3>
    </div>
  </nav>
);
export default Navbar;
