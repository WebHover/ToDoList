import React from 'react';
import './App.scss';
import LoginPage from './LoginPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from '../constans/routes'


function App() {
  return (
    <>
      <Router>
        <Route path={ROUTES.SIGN_IN} component={LoginPage} />
      </Router>
    </>
  );
}

export default App;
