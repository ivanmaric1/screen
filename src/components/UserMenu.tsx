import React, { Component } from 'react';
import './UserMenu.scss';

interface Props {
  setPageToRender: (page: string) => void;
}

export interface State {}

class UserMenu extends Component<Props, State> {
  render() {
    return (
      <div className="UserMenu">
        <ul className="UserMenu-list">
          <li>
            <a onClick={() => this.props.setPageToRender('info')}>
              Osnovne informacije
            </a>
          </li>
          <li>
            <a onClick={() => this.props.setPageToRender('delivery')}>
              Dostava
            </a>
          </li>
          <li>
            <a onClick={() => this.props.setPageToRender('contact')}>Kontakt</a>
          </li>
          <li>
            {localStorage.getItem('userData') ? (
              <a onClick={() => this.props.setPageToRender('login')}>
                Profil <i className="fas fa-user-alt"></i>
              </a>
            ) : (
              <a onClick={() => this.props.setPageToRender('login')}>
                Prijava | Registracija
              </a>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default UserMenu;
