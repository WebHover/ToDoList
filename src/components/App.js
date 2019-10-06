import React from 'react';
import './App.scss';
import { withAuthentication } from './Session';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from '../constans/routes'
import SignUpPage from './SignUp/SignUpPage';
import SignInPage from './SignIn/SigneInPage';
import Navigation from './Navigation';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import AdminPage from './AdminPage'


const App = () => (
  <Router>
    <Navigation />
    <hr />
    {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
  </Router>
);

export default withAuthentication(App);