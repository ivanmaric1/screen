import React, { Component } from 'react';
import UserMenu from './UserMenu';
import ActionBar from './ActionBar';
import logo from '../img/Logo.png';
import './Header.scss';

interface Props {
  setPageToRender: (page: string) => void;
}

class Header extends React.Component<Props> {
  render() {
    return (
      <div className="Header">
        <div className="Header-logo">
          <a>
            <img src={logo} alt="Shop Logo" className="Header-logo-pic" />
          </a>
          <div>
            <i className="fas fa-mobile-alt"></i>
            <span className="Header-logo-tekst">WebShop for screens</span>

            <i className="fas fa-tablet-alt"></i>
          </div>
        </div>
        <div className="Header-features">
          <UserMenu setPageToRender={this.props.setPageToRender} />
          <ActionBar />
        </div>
      </div>
    );
  }
}

export default Header;
