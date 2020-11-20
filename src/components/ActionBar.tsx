import React, { Component } from 'react';
import placanje from '../img/pay.png';
import dodatnoJamstvo from '../img/protecto.jpg';
import './ActionBar.scss';

export interface Props {}

export interface State {}

class ActionBar extends Component<Props, State> {
  render() {
    return (
      <div className="ActionBar">
        <img src={placanje} alt="dodatno jamstvo" />
        <img src={dodatnoJamstvo} alt="dodatno jamstvo" />
        <div className="ActionBar-search">
          <input
            type="text"
            placeholder="Pretraži"
            className="ActionBar-search-field"
          />
          <i className="fas fa-search fa-lg"></i>
        </div>
        <div className="ActionBar-cart">
          <i className="fas fa-shopping-cart fa-2x"></i>
        </div>
      </div>
    );
  }
}

export default ActionBar;
