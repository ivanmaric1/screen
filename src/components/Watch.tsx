import React from 'react';
import './Watch.scss';

interface Mobitel {
  ime: any;
  opis: string;
  cijena: string;
  foto: { prednja: string };
  specifikacija: Specifikacija;
  closePhoneItem: () => void;
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
}) => {
  return (
    <div className="Watch">
      <div className="Watch-left">
        <div className="Watch-left-img">
          <img src={foto.prednja} alt="slika_prednja" />
        </div>
        <div className="Watch-left-price">
          <button className="Watch-left-price-back " onClick={closePhoneItem}>
            <i className="fas fa-angle-double-left "></i>
            Natrag
          </button>
          <button className="Watch-left-price-amount">{cijena}</button>
          <button className="Watch-left-price-buy">
            Dodaj u košaricu <i className="fas fa-shopping-cart fa-lg"></i>
          </button>
        </div>
      </div>
      <div className="Watch-right">
        <div className="Watch-right-head">
          <h3 className="Watch-right-name">{ime}</h3>
          <p className="Watch-right-description">{opis}</p>
        </div>
        <div className="Watch-right-table">
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
