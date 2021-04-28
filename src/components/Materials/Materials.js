import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import Header from '../Header/Header';
import './Materials.css'

const Materials = () => {

    const { isUserLogedIn } = useContext(authContext);
    const history = useHistory();

    isUserLogedIn(history)

    return (
        <div>
            <Header />
        </div>
    );
};

export default Materials;