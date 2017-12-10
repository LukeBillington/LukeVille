import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Luketopia</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">Tickets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Resorts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Attractions</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
