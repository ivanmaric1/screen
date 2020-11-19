import React from 'react';
import './ActionCard.scss';

interface Props {
  ime: string;
  foto: string;
  cijenaStara: string;
  cijenaNova: string;
  brand: string;
  openPhoneItem: (event: React.MouseEvent) => void;
}

const ActionCard: React.FC<Props> = ({
  ime,
  foto,
  cijenaStara,
  cijenaNova,
  openPhoneItem,
  brand,
}) => {
  return (
    <div className="ActionCard" id={brand}>
      <p className="ActionCard-name" onClick={(event) => openPhoneItem(event)}>
        {ime}
      </p>
      <img
        src={foto}
        alt="phone"
        className="ActionCard-img"
        onClick={(event) => openPhoneItem(event)}
      />
      <p
        className="ActionCard-price-old"
        onClick={(event) => openPhoneItem(event)}
      >
        {cijenaStara}
      </p>
      <p
        className="ActionCard-price-new"
        onClick={(event) => openPhoneItem(event)}
      >
        {cijenaNova}
      </p>
    </div>
  );
};

export default ActionCard;
