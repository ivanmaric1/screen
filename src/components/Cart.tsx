import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.scss';

interface Props {
  clearCart: () => void;
}

class Cart extends Component<Props> {
  renderCart() {
    let renderedItems: any[] = [];
    let data: any = localStorage.getItem('cart');
    let items = JSON.parse(data);
    items.forEach((element: any) => {
      console.log(element.slika);
      renderedItems.push(
        <CartItem
          ime={element.ime}
          cijena={element.cijena}
          slika={element.foto}
        />
      );
    });
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
              <button className="Cart-btn">Ažuriraj</button>
              <button
                className="Cart-btn"
                onClick={() => this.props.clearCart()}
              >
                Isprazni
              </button>
              <p>Ukupni iznos : 1 999,99</p>
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
