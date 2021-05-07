import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAwVDAgg6X5Pqpe5OQ0y8dAoI716-95pRc',
  authDomain: 'clone-85dfc.firebaseapp.com',
  projectId: 'clone-85dfc',
  storageBucket: 'clone-85dfc.appspot.com',
  messagingSenderId: '91652626442',
  appId: '1:91652626442:web:8bc349a892a3fc2b5067f3',
  measurementId: 'G-XN0VSXC9M9',
});

const auth = firebase.auth();
export { auth };
