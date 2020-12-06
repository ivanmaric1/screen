import React, { FormEvent, useState } from 'react';
import fire from '../fire';
import './ProfileForm.scss';

interface Props {
  handleLogout: () => void;
}

const ProfileForm: React.FC<Props> = ({ handleLogout }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [oib, setOib] = useState('');
  const [logged, setLogged] = useState(false);
  const userRef = fire.database().ref('users');

  const createCustomer = (e: FormEvent) => {
    e.preventDefault();
    let newUser = userRef.push();
    newUser.set({
      Ime: name,
      Prezime: lastName,
      Email: email,
      Adresa: adress,
      DatumRođenja: dateOfBirth,
      OIB: oib,
    });
    setName('');
    setLastName('');
    setEmail('');
    setAdress('');
    setDateOfBirth('');
    setOib('');
    setLogged(true);
    localStorage.setItem('userData', email);
  };

  return logged ? (
    <div className="Submitted">
      <p>
        Vaša registracija je uspješno obavljena!Zahvaljujemo na registraciji!
      </p>
      <br />
      <p>Kliknite u izborniku na PROFIL!</p>
    </div>
  ) : (
    <div className="ProfileForm">
      <form className="ProfileForm-form" onSubmit={(e) => createCustomer(e)}>
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
          <div className="boxes">
            <input type="checkbox" id="box-1" />
            <label htmlFor="box-1">
              Želim primati obavijesti o novim proizvodima i akcijama
            </label>
            <input type="checkbox" id="box-2" />
            <label htmlFor="box-2">
              Prihvaćam i suglasan/-a sam s Općim uvjetima poslovanja i izjavom
              o povjerljivosti i stariji/-a sam od 16 godina
            </label>
          </div>
        </div>
        <div className="ProfileForm-btn">
          <button type="submit">Spremi podatke</button>
          <button onClick={() => handleLogout()}>Odjavi se</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
