import React, { FormEvent, useState, useEffect } from 'react';
import fire from '../fire';
import './ProfileForm.scss';

interface Props {
  handleLogout: () => void;
  user: string;
}

const ProfileForm: React.FC<Props> = ({ handleLogout, user }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [oib, setOib] = useState('');
  const userRef = fire.database().ref('users');

  const createCustomer = (e: FormEvent) => {
    e.preventDefault();

    setName('');
    setLastName('');
    setEmail('');
    setAdress('');
    setDateOfBirth('');
    setOib('');

    let newUser = userRef.push();
    newUser.set({
      Ime: name,
      Prezime: lastName,
      Email: email,
      Adresa: adress,
      DatumRođenja: dateOfBirth,
      OIB: oib,
    });
  };

  return (
    <div className="ProfileForm">
      <form className="ProfileForm-form">
        <div className="ProfileForm-form-left">
          <label>
            Ime
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Prezime
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="ProfileForm-form-right">
          <label>
            Adresa
            <input
              required
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </label>
          <label>
            Datum rođenja
            <input
              required
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
          <label>
            OIB
            <input
              required
              type="text"
              value={oib}
              onChange={(e) => setOib(e.target.value)}
            />
          </label>
        </div>
        <div className="ProfileForm-form-down">
          <div className="ProfileForm-form-down-box">
            <input type="checkbox" required />
            <label>
              Želim primati obavijesti o novim proizvodima i akcijama
            </label>
            <input type="checkbox" required />
            <label>
              Prihvaćam i suglasan/-a sam s Općim uvjetima poslovanja i izjavom
              o povjerljivosti i stariji/-a sam od 16 godina
            </label>
          </div>
        </div>
      </form>
      <div className="ProfileForm-btn">
        <button onClick={(e) => createCustomer(e)}>Spremi podatke</button>
        <button onClick={handleLogout}>Odjavi se</button>
      </div>
    </div>
  );
};

export default ProfileForm;
