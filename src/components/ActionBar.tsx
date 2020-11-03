import React, { Component } from 'react';
import './ActionBar.scss';

export interface Props {}

export interface State {}

class ActionBar extends Component<Props, State> {
  render() {
    return (
      <div className="ActionBar">
        <div className="ActionBar-search">
          <input type="text" placeholder="Pretraži" />
          <i className="fas fa-search fa-lg"></i>
        </div>
        <div className="ActionBar-cart">
          <i className="fas fa-shopping-cart fa-lg"></i>
        </div>
      </div>
    );
  }
}

export default ActionBar;
