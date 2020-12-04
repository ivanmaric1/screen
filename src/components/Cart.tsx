import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.scss';

interface Props {
  clearCart: () => void;
  deleteItemInCart: (e: React.MouseEvent) => void;
}

const Cart: React.FC<Props> = ({ clearCart, deleteItemInCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    renderTotal();
  });

  const renderCart = () => {
    let renderedItems: any[] = [];
    let data: any = localStorage.getItem('cart');
    let items = JSON.parse(data);

    for (let i = 0; i < items.lengh; i++) {
      for (let j = 0; j < items.length; j++) {
        console.log(i);

        if (items[i].ime === items[j].ime) {
          console.log(items[i]);
        }
      }
    }

    let prices: any = [];
    if (items) {
      for (let i = 0; i < items.length; i++) {
        prices.push(items[i].cijena);
        renderedItems.push(
          <CartItem
            ime={items[i].ime}
            cijena={items[i].cijena}
            slika={items[i].slika}
            deleteItemInCart={deleteItemInCart}
            key={i}
            setTotal={setTotal}
          />
        );
      }
    }

    localStorage.setItem('prices', JSON.stringify(prices));
    return renderedItems;
  };

  const renderTotal = () => {
    let x = document.getElementsByClassName('ramount');
    let y: any = [];
    for (let i = 0; i < x.length; i++) {
      y.push(x[i].innerHTML);
    }
    let itemsToNumber = y
      .map((item: any) => Number(item.replace(/ /g, '').slice(0, -3)))
      .reduce((a: number, b: number) => a + b, 0);
    setTotal(itemsToNumber);
  };

  return (
    <div className="Cart">
      <h2>KOŠARICA</h2>
      {renderCart()}
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
            <button className="Cart-btn" onClick={() => clearCart()}>
              Isprazni
            </button>
            <p>Ukupni iznos :</p>
            <div>{total + ',00'}</div>
          </div>
          <div className="Cart-total-settings">
            <button className="Cart-btn">Nastavi s kuponjom</button>
            <button className="Cart-btn">Nastavi na dostavu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
