import React from 'react';
import './WatchCard.scss';

interface Props {
  ime: string;
  foto: string;
  cijena: string;
  brand: string;
  openPhoneItem: (event: React.MouseEvent) => void;
}

const Watch: React.FC<Props> = ({
  ime,
  foto,
  cijena,
  openPhoneItem,
  brand,
}) => {
  const front = require(`../img/products/${foto}s.png`);
  return (
    <div className="WatchCard" id={brand}>
      <p className="WatchCard-name" onClick={(event) => openPhoneItem(event)}>
        {ime}
      </p>
      <img
        src={front.default}
        alt="phone"
        className="WatchCard-img"
        onClick={(event) => openPhoneItem(event)}
      />
      <p className="WatchCard-price" onClick={(event) => openPhoneItem(event)}>
        {cijena}
      </p>
    </div>
  );
};

export default Watch;
