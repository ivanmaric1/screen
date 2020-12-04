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
  itemsInCart: number;
  search: string;
}

class HomePage extends Component<{}, state> {
  constructor(props: string) {
    super(props);
    this.state = {
      renderPage: 'phones',
      loggedUser: '',
      cart: [],
      itemsInCart: 0,
      search: '',
    };
  }

  filter = (str: string) => {
    this.setState({ search: str });
  };

  setPageToRender = (page: string): void => {
    this.setState({ renderPage: page });
  };

  goHome = () => {
    this.setState({ renderPage: 'phones' });
  };

  addToCart = (ime: string, slika: string, cijena: string) => {
    let data: any = localStorage.getItem('cart');
    let items = JSON.parse(data);
    let item = {
      ime: ime,
      slika: slika,
      cijena: cijena,
      količina: 1,
    };
    if (items) {
      let cart = [...items, item];
      this.setState({
        cart: cart,
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart = [item];
      this.setState({
        cart: cart,
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  clearCart = () => {
    this.setState({ cart: [] });
    localStorage.setItem('cart', 'null');
  };

  setCartNumberOfItems = (sum: number) => {
    this.setState({ itemsInCart: sum });
  };

  deleteItemInCart = (e: React.MouseEvent) => {
    const target = e.target as any;
    const targetName =
      target.parentElement.parentElement.firstChild.nextSibling.innerText;
    let data: any = localStorage.getItem('cart');
    let items = JSON.parse(data);
    let renderItems = items.filter((item: any) => item.ime !== targetName);
    localStorage.setItem('cart', JSON.stringify(renderItems));
    this.setState({
      cart: renderItems,
    });
  };

  renderContent = (): React.ReactNode => {
    if (this.state.renderPage === 'tablets') {
      return <Tablets addToCart={this.addToCart} filter={this.state.search} />;
    }
    if (this.state.renderPage === 'watches') {
      return <Watches addToCart={this.addToCart} filter={this.state.search} />;
    }
    if (this.state.renderPage === 'additional') {
      return (
        <Additional addToCart={this.addToCart} filter={this.state.search} />
      );
    }
    if (this.state.renderPage === 'sale') {
      return <Sale addToCart={this.addToCart} filter={this.state.search} />;
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
      return (
        <Cart
          clearCart={this.clearCart}
          deleteItemInCart={this.deleteItemInCart}
        />
      );
    }
  };

  render() {
    return (
      <div className="HomePage">
        <Header
          setPageToRender={this.setPageToRender}
          goHome={this.goHome}
          filter={this.filter}
        />
        <ItemsMenu setPageToRender={this.setPageToRender} />
        <div className="HomePage-render">
          {this.state.renderPage === 'phones' ? (
            <Phones addToCart={this.addToCart} filter={this.state.search} />
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
