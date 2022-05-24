import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <div className="navLogo">HomeChef</div>
        <div className="navItems">
          <Link to="/" className="navLink">
            Homepage
          </Link>
          <Link to="/feature" className="navLink">
            Feature
          </Link>
          <Link to="/recipe" className="navLink active">
            Recipe
          </Link>
          <Link to="/hotline" className="navLink">
            Hotline
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="navBtns">
          <button>Login</button>
          <button className="register">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
