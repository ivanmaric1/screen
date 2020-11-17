import React from 'react';
import Phone from './Phone';
import './PhoneCard.scss';

interface Props {
  ime: string;
  foto: string;
  cijena: string;
  openPhoneItem: (event: React.MouseEvent) => void;
}

const PhoneCard: React.FC<Props> = ({ ime, foto, cijena, openPhoneItem }) => {
  return (
    <div className="PhoneCard">
      <p className="PhoneCard-name" onClick={(event) => openPhoneItem(event)}>
        {ime}
      </p>
      <img
        src={foto}
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
