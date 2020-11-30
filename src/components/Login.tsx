import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import ProfileData from './ProfileData';
import LoginForm from './LoginForm';
import fire from '../fire';

interface Props {}

const Login: React.FC<Props> = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    const database = fire.database();
    const ref = database.ref('users/');
    ref.on('value', gotData, errData);
  });

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
        console.log(emails);

        if (users[keys[i]].Email === emajla) {
          console.log('Prangija');

          localStorage.setItem('userData', JSON.stringify(users[keys[i]]));
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
  };

  const handleLogout = () => {
    setUser('');
    fire.auth().signOut();
    localStorage.removeItem('userData');
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
    const user = localStorage.getItem('userData');
    if (user) {
      return <ProfileData handleLogout={handleLogout} />;
    }
    if (user === null) {
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
