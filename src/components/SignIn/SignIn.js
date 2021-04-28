import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './SignIn.css'

const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="sign-in__container">
                <span className="sign-in__title">Вход</span>
                <LoginForm />
            </div>
        </div>
    );
};

export default SignIn;