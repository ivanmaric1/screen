import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import ProfileData from './ProfileData';
import LoginForm from './LoginForm';
import fire from '../fire';

interface Props {
  setHasProfile: (has: boolean) => void;
}

const Login: React.FC<Props> = ({ setHasProfile }) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [hasProfileData, setHasProfileData] = useState(false);

  useEffect(() => {
    const database = fire.database();
    const ref = database.ref('users/');
    ref.on('value', gotData, errData);
  });

  useEffect(() => {
    console.log('User loggeed!');
  }, [user]);

  const gotData = (data: any) => {
    let users = data.val();
    let emails: string[] = [];
    let userek: any = user;
    localStorage.setItem('user', JSON.stringify(userek.email));
    let current: any = localStorage.getItem('user');
    let emajla = current.replace(/^"(.*)"$/, '$1');

    if (users !== null) {
      let keys = Object.keys(users);
      for (let i = 0; i < keys.length; i++) {
        emails.push(users[keys[i]].Email);
        if (users[keys[i]].Email === emajla) {
          localStorage.setItem('userData', JSON.stringify(users[keys[i]]));
          setHasProfileData(true);
        }
      }
    }
  };

  const errData = (err: any) => {
    console.log(err);
  };

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err: any) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
    setHasProfile(true);
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err: any) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
    setHasProfile(true);
  };

  const handleLogout = () => {
    setUser('');
    fire.auth().signOut();
    localStorage.removeItem('userData');
    setHasProfile(false);
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user: any) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const renderProfile = () => {
    if (hasProfileData) {
      return <ProfileData handleLogout={handleLogout} />;
    } else {
      return <ProfileForm handleLogout={handleLogout} />;
    }
  };

  return (
    <>
      {user ? (
        renderProfile()
      ) : (
        <LoginForm
          email={email}
          emailError={emailError}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          hasAccount={hasAccount}
          handleLogin={handleLogin}
          setHasAccount={setHasAccount}
          handleSignup={handleSignup}
        />
      )}
    </>
  );
};

export default Login;
