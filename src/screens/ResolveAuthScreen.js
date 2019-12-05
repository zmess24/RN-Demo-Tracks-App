import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

export default ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    // Check if user has already logged in.
    useEffect(() => { tryLocalSignin() }, []);

    return null;
};