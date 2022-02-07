import React from 'react';
import { useAuthContext } from '../providers/auth-context';

const LogOut = () => {
    const { signOut, user } = useAuthContext()


    return(
        <div style={{cursor: 'pointer', color: 'red'}} onClick={signOut}>X</div>
    )
}

export default LogOut;