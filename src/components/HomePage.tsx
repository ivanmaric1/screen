import React, { Component, ReactComponentElement, ReactElement } from 'react';
import Header from './Header';
import ItemsMenu from './ItemsMenu';
import Phones from './Phones';
import Tablets from './Tablets';
import Watches from './Watches';
import Additional from './Additional';
import Sale from './Sale';
import Info from './Info';
import Delivery from './Delivery';
import Contact from './Contact';

import './HomePage.scss';

interface state {
  renderPage: string;
}

class HomePage extends Component<{}, state> {
  constructor(props: string) {
    super(props);
    this.state = {
      renderPage: 'phones',
    };
  }

  setPageToRender = (page: string): void => {
    this.setState({ renderPage: page });
  };

  renderContent = (): React.ReactNode => {
    if (this.state.renderPage === 'tablets') {
      return <Tablets />;
    }
    if (this.state.renderPage === 'watches') {
      return <Watches />;
    }
    if (this.state.renderPage === 'additional') {
      return <Additional />;
    }
    if (this.state.renderPage === 'sale') {
      return <Sale />;
    }
    if (this.state.renderPage === 'info') {
      return <Info />;
    }
    if (this.state.renderPage === 'delivery') {
      return <Delivery />;
    }
    if (this.state.renderPage === 'contact') {
      return <Contact />;
    }
  };
  //staviti ternery ovdjer
  render() {
    return (
      <div>
        <Header setPageToRender={this.setPageToRender} />
        <ItemsMenu setPageToRender={this.setPageToRender} />
        <div className="HomePage-render">
          {this.state.renderPage === 'phones' ? (
            <Phones />
          ) : (
            this.renderContent()
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
