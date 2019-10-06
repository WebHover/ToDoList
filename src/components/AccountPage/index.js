import React from 'react';
// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import SignOut from '../SignOut'
const AccountPage = () => (
    <div>
        <h1>Account Page</h1>
        <SignOut />
        {/* <PasswordForgetForm />
    <PasswordChangeForm /> */}
    </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);