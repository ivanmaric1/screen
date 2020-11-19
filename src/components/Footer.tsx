import React from 'react';
import './Footer.scss';
import pay from '../img/placanje.jpg';
import dostava from '../img/dostava.jpg';
import paypal from '../img/paypal.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-left">
        <h3>SCREEN D.O.O</h3>
        <p>Sve navedene cijene su sa uračunatim PDV-om.</p>
        <br />
        <p>
          Svijet Medija pokušava biti što precizniji u opisu proizvoda, ali ipak
          ne može garantirati da su opis, slika i tehnički podaci proizvoda u
          potpunosti točni.
        </p>
        <br />
        <p>
          Sjedište: Trg Cristiana Ronalda 10, 10000 Zagreb Trgovački sud u
          Zagrebu, reg. 1-50280
        </p>
        <br />
        <p>Temeljni kapital: 2.820.000 kn uplaćen u cijelosti</p>

        <p>Copyright © 1994-2019 Svijet medija </p>
      </div>
      <div className="Footer-right">
        <img src={pay} alt="placanje" />
        <img src={paypal} alt="paypal" />
        <img src={dostava} alt="dostava" />
      </div>
    </div>
  );
};

export default Footer;
