import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Materials from './components/Materials/Materials';
import SignIn from './components/SignIn/SignIn';
import AuthContextProvider from './contexts/AuthContext';

const Routes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                {/* <AppBar /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/materials" component={Materials} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default Routes;