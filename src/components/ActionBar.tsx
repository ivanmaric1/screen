import React, { Component } from 'react';
import placanje from '../img/pay.png';
import dodatnoJamstvo from '../img/protecto.jpg';
import './ActionBar.scss';

interface Props {
  setPageToRender: (page: string) => void;
}

export interface State {}

class ActionBar extends Component<Props, State> {
  renderNumberItems = () => {
    let data: any = localStorage.getItem('cart');
    let items = JSON.parse(data);
    return items.length;
  };
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
          <i
            className="fas fa-shopping-cart fa-2x"
            onClick={() => this.props.setPageToRender('cart')}
          ></i>
          <span>{this.renderNumberItems()}</span>
        </div>
      </div>
    );
  }
}

export default ActionBar;
