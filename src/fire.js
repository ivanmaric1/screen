import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyC56Xc3z-TMAxxgTiWt8kQhNYAr7xyx0KY',
  authDomain: 'screen-79b78.firebaseapp.com',
  databaseURL: 'https://screen-79b78.firebaseio.com',
  projectId: 'screen-79b78',
  storageBucket: 'screen-79b78.appspot.com',
  messagingSenderId: '624460181006',
  appId: '1:624460181006:web:57ccbabed2be2159d9565f',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
