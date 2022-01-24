import React, { useContext, useEffect, useState, createContext } from 'react';
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


    useEffect(() => {
        if (auth)
            auth.onAuthStateChanged((user) => {

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
        auth.signInWithEmailAndPassword('nasaa1@gmail.com', '123456')
    };  

    const signUp = (email, password) => {
        auth.createUserWithEmailAndPassword('nasaa1@gmail.com', '123456')

    }

    const signOut = () => {
        auth.signOut()
    }
    return <AuthContext.Provider value={{ login, signUp, signOut, user }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}