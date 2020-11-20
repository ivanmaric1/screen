import React, { FormEvent, useState } from 'react';
import fire from '../fire';
import './Profile.scss';

interface Props {
  handleLogout: () => void;
  user: string;
}

const Profile: React.FC<Props> = ({ handleLogout }) => {
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
    <div className="Profile">
      <form className="Profile-form">
        <div className="Profile-form-left">
          <label>
            Ime
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Prezime
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="Profile-form-right">
          <label>
            Adresa
            <input
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </label>
          <label>
            Datum rođenja
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
          <label>
            OIB
            <input
              type="text"
              value={oib}
              onChange={(e) => setOib(e.target.value)}
            />
          </label>
        </div>
        <div className="Profile-form-down">
          <label>Želim primati obavijesti o novim proizvodima i akcijama</label>
          <input type="checkbox" />
          <label>
            Prihvaćam i suglasan/-a sam s Općim uvjetima poslovanja i izjavom o
            povjerljivosti i stariji/-a sam od 16 godina
            <input type="checkbox" />
          </label>
        </div>
      </form>
      <div className="Profile-btn">
        <button onClick={(e) => createCustomer(e)}>Spremi podatke</button>
        <button onClick={handleLogout}>Odjavi se</button>
      </div>
    </div>
  );
};

export default Profile;
