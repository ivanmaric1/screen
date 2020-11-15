import React from 'react';
import Phone from './Phone';
import './PhoneCard.scss';

interface Props {
  ime: string;
  foto: string;
  cijena: string;
}

const PhoneCard: React.FC<Props> = ({ ime, foto, cijena }) => {
  return (
    <div className="PhoneCard">
      <p className="PhoneCard-name">{ime}</p>
      <img src={foto} alt="phone" className="PhoneCard-img" />
      <p className="PhoneCard-price">{cijena}</p>
    </div>
  );
};

export default PhoneCard;
