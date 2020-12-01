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
import Cart from './Cart';
import Login from './Login';
import Footer from './Footer';
import './HomePage.scss';

interface state {
  renderPage: string;
  loggedUser: string;
  cart: any[];
}

class HomePage extends Component<{}, state> {
  constructor(props: string) {
    super(props);
    this.state = {
      renderPage: 'phones',
      loggedUser: '',
      cart: [],
    };
  }

  setPageToRender = (page: string): void => {
    this.setState({ renderPage: page });
  };

  goHome = () => {
    this.setState({ renderPage: 'phones' });
  };

  addToCart = (ime: string, slika: string, cijena: string) => {
    let item = {
      ime: ime,
      slika: slika,
      cijena: cijena,
    };
    this.setState({ cart: [...this.state.cart, item] });
    let cart = [...this.state.cart, item];
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  renderContent = (): React.ReactNode => {
    if (this.state.renderPage === 'tablets') {
      return <Tablets addToCart={this.addToCart} />;
    }
    if (this.state.renderPage === 'watches') {
      return <Watches addToCart={this.addToCart} />;
    }
    if (this.state.renderPage === 'additional') {
      return <Additional addToCart={this.addToCart} />;
    }
    if (this.state.renderPage === 'sale') {
      return <Sale addToCart={this.addToCart} />;
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
    if (this.state.renderPage === 'cart') {
      return <Cart clearCart={this.clearCart} />;
    }
  };

  render() {
    return (
      <div className="HomePage">
        <Header setPageToRender={this.setPageToRender} goHome={this.goHome} />
        <ItemsMenu setPageToRender={this.setPageToRender} />
        <div className="HomePage-render">
          {this.state.renderPage === 'phones' ? (
            <Phones addToCart={this.addToCart} />
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
