import React from 'react';
import './Tablet.scss';

interface Mobitel {
  ime: any;
  opis: string;
  cijena: string;
  foto: { prednja: string };
  specifikacija: Specifikacija;
  closePhoneItem: () => void;
  addToCart: (ime: string, slika: string, cijena: string) => void;
}

interface Specifikacija {
  dimenzija: string;
  težina: string;
  zaslon: string;
  promjer: string;
  memorija: string;
  trajanjeBaterije: string;
}

const Watch: React.FC<Mobitel> = ({
  ime,
  opis,
  cijena,
  foto,
  specifikacija,
  closePhoneItem,
  addToCart,
}) => {
  return (
    <div className="Tablet">
      <div className="Tablet-left">
        <div className="Tablet-left-img">
          <img src={foto.prednja} alt="slika_prednja" />
        </div>
        <div className="Tablet-left-price">
          <button className="Tablet-left-price-back " onClick={closePhoneItem}>
            <i className="fas fa-angle-double-left "></i>
            Natrag
          </button>
          <button className="Tablet-left-price-amount">{cijena}</button>
          <button
            className="Tablet-left-price-buy"
            onClick={() => addToCart(ime, foto.prednja, cijena)}
          >
            Dodaj u košaricu <i className="fas fa-shopping-cart fa-lg"></i>
          </button>
        </div>
      </div>
      <div className="Tablet-right">
        <div className="Tablet-right-head">
          <h3 className="Tablet-right-name">{ime}</h3>
          <p className="Tablet-right-description">{opis}</p>
        </div>
        <div className="Tablet-right-table">
          <table>
            <tr>
              <td>Dimenzija</td>
              <td>{specifikacija.dimenzija}</td>
            </tr>
            <tr>
              <td>Težina</td>
              <td>{specifikacija.težina}</td>
            </tr>
            <tr>
              <td>Zaslon</td>
              <td>{specifikacija.zaslon}</td>
            </tr>
            <tr>
              <td>Promjer</td>
              <td>{specifikacija.promjer}</td>
            </tr>
            <tr>
              <td>Memorija</td>
              <td>{specifikacija.memorija}</td>
            </tr>
            <tr>
              <td>Baterija</td>
              <td>{specifikacija.trajanjeBaterije}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Watch;
