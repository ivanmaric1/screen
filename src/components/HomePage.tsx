import React, { Component, ReactComponentElement, ReactElement } from 'react';
import Header from './Header';
import ItemsMenu from './ItemsMenu';
import Phones from './Phones';
import Tablets from './Tablets';
import Watches from './Watches';
import Additional from './Additional';
import Sale from './Sale';

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
  };

  render() {
    return (
      <div>
        <Header />
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
