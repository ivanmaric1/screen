import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.scss';

interface Props {
  clearCart: () => void;
  deleteItemInCart: (e: React.MouseEvent) => void;
}

interface State {
  total: number;
}

class Cart extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  updateNumberOfItems = (e: React.MouseEvent) => {
    const target = e.target as any;
    const targetName =
      target.parentElement.parentElement.parentElement.parentElement.firstChild
        .nextSibling.innerText;
    console.log(targetName);

    let data: any = localStorage.getItem('cart');
    let items = JSON.parse(data);
    console.log(items);

    let renderItems = items.filter((item: any) => item.ime !== targetName);
    // localStorage.setItem('cart', JSON.stringify(renderItems));
  };

  renderCart() {
    let renderedItems: any[] = [];
    let data: any = localStorage.getItem('cart');
    let items = JSON.parse(data);
    if (items) {
      items.forEach((element: any) => {
        renderedItems.push(
          <CartItem
            ime={element.ime}
            cijena={element.cijena}
            slika={element.slika}
            količina={element.količina}
            deleteItemInCart={this.props.deleteItemInCart}
            updateNumberOfItems={this.updateNumberOfItems}
          />
        );
      });
    }
    return renderedItems;
  }

  render() {
    return (
      <div className="Cart">
        <h2>KOŠARICA</h2>
        {this.renderCart()}
        <hr />
        <div className="Cart-footer">
          <div className="Cart-coupon">
            <p>Kodovi za popust</p>
            <div className="Cart-coupon-form">
              <input type="text" />
              <button className="Cart-btn">Primjeni popust</button>
            </div>
          </div>
          <div className="Cart-total">
            <div className="Cart-total-settings">
              <button
                className="Cart-btn"
                onClick={() => this.props.clearCart()}
              >
                Isprazni
              </button>
              <p>Ukupni iznos :</p>
              <span>{this.state.total}</span>
            </div>
            <div className="Cart-total-settings">
              <button className="Cart-btn">Nastavi s kuponjom</button>
              <button className="Cart-btn">Nastavi na dostavu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
