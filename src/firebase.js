import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBMH3JvbKfA-kcDXQSxiG7zR2VA9vO0tt0",
  authDomain: "boginoo-b6c56.firebaseapp.com",
  projectId: "boginoo-b6c56",
  storageBucket: "boginoo-b6c56.appspot.com",
  messagingSenderId: "963310800134",
  appId: "1:963310800134:web:7a37e7d85b164bb3166287",
  measurementId: "G-VZEG03FTBM"
};


export const useFirebase = () => {
  const [state, setState] = useState({
    firebase
  })

  useEffect(() => {
    const app = firebase.initializeApp(firebaseConfig)
    const auth = firebase.auth(app);
    const firestore = firebase.firestore(app)

    setState({auth, firestore, app})
  }, [])

  return state;
}