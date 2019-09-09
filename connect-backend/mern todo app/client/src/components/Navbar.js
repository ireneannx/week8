import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../theme/theme'
import Switch from '../theme/Switch'

const Navbar = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => { ///use render props with context api 
        var themestyle = theme == "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"
        return (
          <nav className={`navbar navbar-expand-lg ${themestyle}`}>
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
              <ul className="ml-auto">
                <Switch />

              </ul>
            </div>
          </nav>
        )
      }}
    </ThemeConsumer>
  )
}

export default Navbar;
