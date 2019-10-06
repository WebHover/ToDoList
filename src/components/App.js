import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from '../constans/routes'
import SignUpPage from './SignUp/SignUpPage';


function App() {
  return (
    <>
      <Router>
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </Router>
    </>
  );
}

export default App;
