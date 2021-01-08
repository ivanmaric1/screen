import React from 'react';
import './PhoneCard.scss';

interface Props {
  ime: string;
  foto: string;
  cijena: string;
  brand: string;
  openPhoneItem: (event: React.MouseEvent) => void;
}

const PhoneCard: React.FC<Props> = ({
  ime,
  foto,
  cijena,
  openPhoneItem,
  brand,
}) => {
  const front = require(`../img/products/${foto}s.png`);
  return (
    <div className="PhoneCard" id={brand}>
      <p className="PhoneCard-name" onClick={(event) => openPhoneItem(event)}>
        {ime}
      </p>
      <img
        src={front.default}
        alt="phone"
        className="PhoneCard-img"
        onClick={(event) => openPhoneItem(event)}
      />
      <p className="PhoneCard-price" onClick={(event) => openPhoneItem(event)}>
        {cijena}
      </p>
    </div>
  );
};

export default PhoneCard;
