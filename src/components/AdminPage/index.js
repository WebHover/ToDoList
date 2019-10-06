import React, { Component } from 'react';
import * as ROLES from '../../constans/roles';
import { withFirebase } from '../Firebase';
import withAuthorization from '../Session/withAuthorization';

class AdminPage extends Component {
    state = {
        loading: false,
        users: [],
    };
    componentDidMount() {
        console.log(this.props.firebase.users());
        this.setState({ loading: true });
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }
    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;
        return (
            <div>
                <h1>Admin</h1>
                {loading && <div>Loading ...</div>}
                <UserList users={users} />
                {console.log(users)}
            </div>
        );
    }
}
const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <span>
                    <strong>ID:</strong> {user.uid}
                </span>
                <span>
                    <strong>E-Mail:</strong> {user.email}
                </span>
                <span>
                    <strong>Username:</strong> {user.username}
                </span>
            </li>
        ))}
    </ul>
);
// const condition = authUser =>
//     authUser && !!authUser.roles[ROLES.ADMIN];
export default withFirebase(AdminPage);