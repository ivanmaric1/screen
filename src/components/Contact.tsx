import React, { useState } from 'react';
import logo from '../img/Logo.png';
import './Contact.scss';

const Contact = () => {
  const [sendingData, setSendingData] = useState(false);

  return (
    <div className="Contact">
      {sendingData ? (
        <div className="SendingData">
          <h2>Vaša poruka je uspješno poslana</h2>
          <br />
          <hr />
          <br />
          <h4>
            Hvala na poslanoj poruci, javit ćemo vam se u najkraćem mogućem
            roku.
          </h4>
        </div>
      ) : (
        <>
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
            <button onClick={() => setSendingData(true)}>Pošalji</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
