import React, { useState } from 'react';
import './CartItem.scss';

interface Props {
  ime: string;
  slika: string;
  cijena: string;
  količina: number;
  deleteItemInCart: (e: React.MouseEvent) => void;
  updateNumberOfItems: (e: React.MouseEvent) => void;
}

const CartItem: React.FC<Props> = ({
  ime,
  slika,
  cijena,
  količina,
  deleteItemInCart,
  updateNumberOfItems,
}) => {
  const [amount, setAmount] = useState(1);

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
                onClick={(event) => updateNumberOfItems(event)}
              ></i>
            </p>
            <p>{količina}</p>
            <p>
              <i
                className="fas fa-arrow-alt-circle-down"
                onClick={() => setAmount(amount - 1)}
              ></i>
            </p>
          </div>
        </td>
        <td className="medium">
          <p>{cijena}</p>
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
