import React, { useEffect, useState } from 'react';
import loader from '../img/loader.gif';
import './ProfileData.scss';

interface Props {
  handleLogout: () => void;
}

const ProfileData: React.FC<Props> = ({ handleLogout }) => {
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [email, setEmail] = useState('');
  const [datum, setDatum] = useState('');
  const [adresa, setAdresa] = useState('');
  const [oib, setOIB] = useState('');

  setTimeout(() => {
    let data: any = localStorage.getItem('userData');
    let user = JSON.parse(data);
    setIme(user.Ime);
    setPrezime(user.Prezime);
    setEmail(user.Email);
    setDatum(user.DatumRođenja);
    setAdresa(user.Ime);
    setOIB(user.Ime);
  }, 200);

  return (
    <div>
      {ime ? (
        <div className="ProfileData">
          <table>
            <h3>Osnovne Informacije</h3>
            <tr>
              <td>Ime</td>
              <td>{ime}</td>
            </tr>
            <tr>
              <td>Prezime</td>
              <td>{prezime}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Datum rođenja</td>
              <td>{datum}</td>
            </tr>
            <tr>
              <td>Adresa</td>
              <td>{adresa}</td>
            </tr>
            <tr>
              <td>OIB</td>
              <td>{oib}</td>
            </tr>
          </table>
          <div>Lista narudžbi</div>
          <button className="ProfileData-btn" onClick={() => handleLogout()}>
            Odjavi se
          </button>
        </div>
      ) : (
        <div className="ProfileData-loader">
          <img src={loader} />;
        </div>
      )}
    </div>
  );
};
export default ProfileData;
