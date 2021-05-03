import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import NavBar from '../NavBar/NavBar';
import './SignIn.css'

const SignIn = () => {
    return (
        <>
            <NavBar />
            <div className="sign-in">
                <div className="sign-in__container">
                    <span className="sign-in__title">Вход</span>
                    <LoginForm />
                </div>
            </div>
        </>
    );
};

export default SignIn;