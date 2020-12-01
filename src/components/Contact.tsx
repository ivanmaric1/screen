import React, { useState } from 'react';
import logo from '../img/Logo.png';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-info">
        <img src={logo} alt="Shop Logo" className="Contact-info-logo" />
        <h2> SCREEN d.o.o.</h2>
        <h4> za trgovinu, promet i usluge </h4>
        <h4>
          Sjedište: Trg Cristiana Ronalda 10, 10000 Zagreb Trgovački sud u
          Zagrebu, reg. 1-50280
        </h4>
      </div>
      <form className="Contact-form">
        <label>
          Ime i prezime
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Vaša poruka
          <textarea></textarea>
        </label>
        <button>Pošalji</button>
      </form>
    </div>
  );
};

export default Contact;
