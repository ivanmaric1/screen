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
import Login from './Login';
import Footer from './Footer';
import './HomePage.scss';

interface state {
  renderPage: string;
  loggedUser: string;
}

class HomePage extends Component<{}, state> {
  constructor(props: string) {
    super(props);
    this.state = {
      renderPage: 'phones',
      loggedUser: '',
    };
  }

  setPageToRender = (page: string): void => {
    this.setState({ renderPage: page });
  };

  goHome = () => {
    this.setState({ renderPage: 'phones' });
  };

  addToBasket = (event: Event) => {
    console.log(event);
  };

  renderContent = (): React.ReactNode => {
    if (this.state.renderPage === 'tablets') {
      return <Tablets addToBasket={this.addToBasket} />;
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
    if (this.state.renderPage === 'login') {
      return <Login />;
    }
  };

  render() {
    return (
      <div className="HomePage">
        <Header setPageToRender={this.setPageToRender} goHome={this.goHome} />
        <ItemsMenu setPageToRender={this.setPageToRender} />
        <div className="HomePage-render">
          {this.state.renderPage === 'phones' ? (
            <Phones />
          ) : (
            this.renderContent()
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
