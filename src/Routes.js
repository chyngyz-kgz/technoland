import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Materials from './components/Materials/Materials';
import SignIn from './components/SignIn/SignIn';
import AuthContextProvider from './contexts/AuthContext';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import Partners from './components/Partners/Partners';
import About from './components/About/About';

const Routes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/materials" component={Materials} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/partners" component={Partners} />
                    <Route exact path="/about" component={About} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default Routes;