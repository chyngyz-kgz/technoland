import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import './Materials.css'

import NavBar from '../NavBar/NavBar'

const Materials = () => {

    const { isUserLogedIn } = useContext(authContext);
    const history = useHistory();

    useEffect(() => {
        isUserLogedIn(history);
    }, []);

    return (
        <>
            <NavBar />
        </>
    );
};

export default Materials;