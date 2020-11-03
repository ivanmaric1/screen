import React, { Component } from 'react';
import './UserMenu.scss';

export interface Props {}

export interface State {}

class UserMenu extends Component<Props, State> {
  render() {
    return (
      <div className="UserMenu">
        <ul className="UserMenu-list">
          <li>
            <a href="#">Osnovne informacije</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Prijava | Registracija</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserMenu;
