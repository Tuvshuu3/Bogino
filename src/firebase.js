import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyC7rkenxKz6N6S8PzWpABHjTOE6b5fVuKI",
  authDomain: "boginoo-e6f49.firebaseapp.com",
  projectId: "boginoo-e6f49",
  storageBucket: "boginoo-e6f49.appspot.com",
  messagingSenderId: "311127533614",
  appId: "1:311127533614:web:587b7552edccea151357bf",
  measurementId: "G-BMWFXXGHNK"
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

export const useCollection = (path) => {
  const [data, setData] = useState([])
  const { firestore } = useFirebase();

  useEffect(() => {
    if(firestore && path)
    firestore.collection(path).onSnapshot((querySnapshot) => {
      var cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({id: doc.id, ...doc.data()});
      });
      setData(cities)
    });
  }, [path, firestore]) 

  const createDoc = (docId, data) => {
    firestore.collection(path).doc(docId).set({
      ...data
    }).then(() => console.log("successful"))
  }
  return { data, createDoc }
}