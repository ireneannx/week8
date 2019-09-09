import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      {/* the <> above is a react fragment. This removes the need for unnecessary div */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="" target="_blank">
          {/* <img src={logo} width="30" height="30" /> */}
        </a>
        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </div>
      </nav>

      <br />
    </>
  )
}

export default Navbar;