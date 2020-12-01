import React from 'react';
import './CartItem.scss';

interface Props {
  ime: string;
  slika: string;
  cijena: string;
}

const CartItem: React.FC<Props> = ({ ime, slika, cijena }) => {
  return (
    <div className="CartItem">
      <img src={slika} alt="proizvod" />
      <p>{ime}</p>
      <p>{cijena}</p>
      <div className="CartItem-quantity">
        <p>
          <i className="fas fa-arrow-alt-circle-up"></i>
        </p>
        <p>1</p>
        <p>
          <i className="fas fa-arrow-alt-circle-down"></i>
        </p>
      </div>
      <p>1999,99</p>
      <i className="fas fa-trash-alt"></i>
    </div>
  );
};

export default CartItem;
