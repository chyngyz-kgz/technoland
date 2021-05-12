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
import AdminPanel from './components/AdminPanel/AdminPanel';
import AdminAuthContextProvider from './contexts/AdminAuthContext';
import EditMaterials from './components/EditMaterials/EditMaterials';
import AddEvent from './components/AddEvent/AddEvent';
import AdminNewsContextProvider from './contexts/AdminNewsContext';
import NewsContextProvider from './contexts/NewsContext';
import NewsDetails from './components/NewsDetails/NewsDetails';
import AdminPanelNews from './components/AdminPanelNews/AdminPanelNews';
import EditNews from './components/EditNews/EditNews';
import FavouriteNews from './components/FavouriteNews/FavouriteNews';

const Routes = () => {
    return (
        <AuthContextProvider>
            <AdminAuthContextProvider>
                <AdminNewsContextProvider>
                    <NewsContextProvider>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/login" component={SignIn} />
                                <Route exact path="/materials" component={Materials} />
                                <Route exact path="/news" component={News} />
                                <Route exact path="/news-details/:id" component={NewsDetails} />
                                <Route exact path="/contacts" component={Contacts} />
                                <Route exact path="/partners" component={Partners} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/admin_panel" component={AdminPanel} />
                                <Route exact path="/admin-panel-news" component={AdminPanelNews} />
                                <Route exact path="/edit-materials" component={EditMaterials} />
                                <Route exact path="/add-event" component={AddEvent} />
                                <Route exact path="/edit-news/:id" component={EditNews} />
                                <Route exact path="/favourite-news" component={FavouriteNews} />
                                <Redirect to="/" />
                            </Switch>
                            <Footer />
                        </BrowserRouter>
                    </NewsContextProvider>
                </AdminNewsContextProvider>
            </AdminAuthContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;