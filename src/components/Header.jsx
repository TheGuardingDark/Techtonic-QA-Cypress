import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  // # The useLocation hook returns the location object that represents the current URL
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link to="/">
        <h1>Conditional Rendering Demo</h1>
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" isActive={() => pathname === '/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
