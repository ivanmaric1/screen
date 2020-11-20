import React from 'react';
import logo from '../img/Logo.png';
import './LoginForm.scss';

interface Props {
  email: string;
  setEmail: any;
  password: string;
  setPassword: any;
  passwordError: string;
  hasAccount: any;
  handleLogin: any;
  handleSignup: any;
  emailError: string;
  setHasAccount: any;
}

const LoginForm: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  passwordError,
  hasAccount,
  handleLogin,
  handleSignup,
  emailError,
  setHasAccount,
}) => {
  return (
    <div className="Login">
      <img src={logo} className="Login-logo" alt="spnft-logo" />
      <label>
        Korisničko ime
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <p className="errorMessage">{emailError}</p>
      <label>
        Lozinka
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <p className="errorMessage">{passwordError}</p>
      <div className="Login-btn-container">
        {hasAccount ? (
          <>
            <button className="Login-btn" onClick={handleLogin}>
              Prijavi se
            </button>
            <p className="Login-newUser">
              Nemaš račun?
              <span onClick={() => setHasAccount(!hasAccount)}>
                Registriraj se!
              </span>
            </p>
          </>
        ) : (
          <>
            <button className="Login-btn" onClick={handleSignup}>
              Registriraj se
            </button>
            <p className="Login-newUser">
              Imaš račun?
              <span onClick={() => setHasAccount(!hasAccount)}>
                Prijavi se!
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
