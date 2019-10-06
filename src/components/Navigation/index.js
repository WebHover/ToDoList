import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constans/routes'


import { AuthUserContext } from '../Session';
const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => {
                // authUser ? <NavigationAuth /> : <NavigationNonAuth />
                console.log(authUser);
            }
            }
        </AuthUserContext.Consumer>
    </div>
);
export default Navigation;