import React, { Component } from 'react';
import UserMenu from './UserMenu';
import ActionBar from './ActionBar';
import logo from '../img/Logo.png';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <a>
          <img src={logo} alt="Shop Logo" className="Header-logo" />
        </a>
        <div className="Header-features">
          <UserMenu />
          <ActionBar />
        </div>
      </div>
    );
  }
}

export default Header;
