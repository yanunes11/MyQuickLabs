import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from "./images/qalogo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <a
          href="https://www.qa.com"
          className="navbar-brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="QA Ltd" style={{ width: '100px' }} />
        </a>
        <Link className="navbar-brand" to="/">
          <h1>Todo App</h1>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink className="nav-link" activeClassName="nav-link active">
                All Todos
              </NavLink>
              <NavLink to="/add" className="nav-link" activeClassName="nav-link active">
                Add Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
