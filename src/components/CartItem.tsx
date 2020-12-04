import React, { useState } from 'react';
import './CartItem.scss';

interface Props {
  ime: string;
  slika: string;
  cijena: string;
  key: number;
  setTotal: (num: number) => void;
  deleteItemInCart: (e: React.MouseEvent) => void;
}

const CartItem: React.FC<Props> = ({
  ime,
  slika,
  cijena,
  setTotal,
  deleteItemInCart,
}) => {
  const [amount, setAmount] = useState(1);

  const addItem = () => {
    setTotal(amount + 1);
    setAmount(amount + 1);
  };
  const subtractItem = () => {
    setTotal(amount - 1);
    setAmount(amount - 1);
  };

  const renderPrice = () => {
    let price: any =
      Number(cijena.replace(/ /g, '').slice(0, -5)) * amount + ',00';
    localStorage.setItem('price', price);

    return price;
  };

  return (
    <div className="CartItem">
      <table>
        <td className="medium">
          <img src={slika} alt="proizvod" />
        </td>
        <td className="big">
          <p>{ime}</p>
        </td>
        <td className="medium">
          <p>{cijena}</p>
        </td>
        <td className="small">
          <div className="CartItem-quantity">
            <p>
              <i
                className="fas fa-arrow-alt-circle-up"
                onClick={() => addItem()}
              ></i>
            </p>
            <p>{amount}</p>
            <p>
              <i
                className="fas fa-arrow-alt-circle-down"
                onClick={() => subtractItem()}
              ></i>
            </p>
          </div>
        </td>
        <td className="medium">
          <div className="ramount">{renderPrice()}</div>
        </td>
        <td className="small">
          <i
            className="fas fa-trash-alt"
            onClick={(event) => deleteItemInCart(event)}
          ></i>
        </td>
      </table>
    </div>
  );
};

export default CartItem;
