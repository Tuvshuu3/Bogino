import React, { useContext, useEffect, useState, createContext } from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useFirebase } from '../firebase';


export const AuthContext = createContext({
    login: () => { },
    signUp: () => { },
    signOut: () => { },
    user: {},
})

export const AuthProvider = ({ children }) => {
    const { auth, firebase } = useFirebase()
    const [user, setUser] = useState({})

    const [dark, setDark] = useState(false)
    const [eng, setEng] = useState(false)

    const setNightMode = () => {
    console.log(dark)
    setDark(!dark)
    }

    const setEngMode = () => {
        setEng(!eng)
        }


    useEffect(() => {
        if (auth)
            auth.onAuthStateChanged((user) => {
                scryRenderedDOMComponentsWithClass()
                if (user) {
                    setUser(user)
                    var uid = user.uid;
                    // ...
                } else {    
                    setUser({})
                }
            });
    }, [auth])
      
    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
        console.log("logged in successfully")
        
    };  

    const signUp = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
    }

    const signOut = () => {
        auth.signOut()
        alert("You have logged out!")
    }
    return <AuthContext.Provider value={{ login, signUp, signOut, dark, setNightMode, setEngMode, eng, user }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}