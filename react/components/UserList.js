import React from 'react';
import {PropTypes} from 'prop-types';
class UserList extends React.Component {

    render() {

        let {users} = this.props;

        return (
            <datalist id="users">
                {(users.length > 0) &&
                    users.map((user, index) => {
                        return <option value={user.name} key={index}>{user.name}</option>
                    })
                }
            </datalist>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array
};

export default UserList;