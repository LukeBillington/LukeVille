import React, { Component } from 'react';
import './GlobalNavbar.css';

class GlobalNavbar extends Component {

  render() {
    return (
      <nav className="GlobalNavbar">
        <h1>Luketopia</h1>
        <ul>
          <li>Tickets</li>
          <li>Resorts</li>
          <li>Attractions</li>
        </ul>
      </nav>
    );
  }

}

export default GlobalNavbar;
