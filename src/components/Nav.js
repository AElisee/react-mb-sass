import React, { useState } from "react";

const Nav = () => {
  const [showlinks, setShowlinks] = useState(false);
  const handleShow = () => {
    setShowlinks(!showlinks);
  };
  console.log(showlinks);
  return (
    <div>
      <nav className={`navbar ${showlinks ? "show-links" : "hidden-links"}`}>
        <div className="navbar-logo">
          <h3>Elisha</h3>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Comptences
            </a>
          </li>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Portfolio
            </a>
          </li>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              A propos
            </a>
          </li>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Curiculum Vitea
            </a>
          </li>
        </ul>
        <button className="navbar-burger" onClick={handleShow}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
