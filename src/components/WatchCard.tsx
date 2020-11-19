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
  return (
    <div className="WatchCard" id={brand}>
      <p className="WatchCard-name" onClick={(event) => openPhoneItem(event)}>
        {ime}
      </p>
      <img
        src={foto}
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
