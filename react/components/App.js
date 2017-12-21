import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../actions/userActions';

import UserList from './UserList';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users:[]
        };

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onFocusUser = this.onFocusUser.bind(this);
        this.onBlurUser = this.onBlurUser.bind(this);
    }

    componentDidMount() {
        this.props.userActions.fetchUsers();
    }

    onChangeUser(event) {
        let users = [];
        let searchName = event.target.value.toLowerCase();
        users = this.props.users.filter((user) => user.name.toLowerCase().indexOf(searchName) !== -1);
        this.setState(Object.assign({}, this.state, {users: users}));
    }

    onFocusUser() {
        this.setState(Object.assign({}, this.state, {users: this.props.user}));
    }

    onBlurUser() {
        this.setState(Object.assign({}, this.state, {users: []}));
    }

    render() {

        return (
            <div >
                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <a class="navbar-brand" href="#">BI Model</a>
                    </div>
                    <ul class="nav navbar-nav">
                      <li class="active"><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Customers</a></li>
                    </ul>
                  </div>
                </nav>
				<div class="container">
                    <div class="panel-group">
                        <div class="panel panel-primary">
                            <div class="panel-heading">Search Box</div>
                            <div class="panel-body">
                             <fieldset>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label>Search</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" list="users" name="users"
                                                placeholder="Search..."
                                                onChange={this.onChangeUser}
                                                onFocus={this.onFocusUser}
                                                onBlur={this.onBlurUser}
                                                className="form-control" autoFocus/>
                                        {this.state.users &&
                                            <UserList users={this.state.users}/>
                                            }
                                    </div>
                                </div>
                             </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                  <p>Posted by: Shantanu Ranjan</p>
                  <p>Contact information: <a href="mailto:shantanuranjan3@gmail.com">shantanuranjan3@gmail.com</a>.</p>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.user.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions:bindActionCreators(userActions, dispatch)
    }
}

App.propTypes = {
    users: PropTypes.array,
    userActions: PropTypes.object
};




export default connect(mapStateToProps, mapDispatchToProps)(App);