Technology Used: React/ Redux, Bootstrap, Fetch APIS

Mock Endpoint: https://jsonplaceholder.typicode.com/users

CODE STRUCTURE:

Actions:  
userActions: To make http call using fetch apis which is been provided by UserService.

Components: 
App.js : Container component  To connect Redux Store using mapStateToProps and mapDispatchToProps;


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

UserList: Presentation Component  To show users name on input box.


Reducers:
userReducer: To return new state from existing state based on action type.
Action.type: {FETCH_USERS, FETCH_USERS_FULLFILLED, FETCH_USERS_REJECTED}


Store:
Single source of truth.It contains application state.

const store = createStore(reducers, middleware);



To Launch the application:
Go to root path and run:

	npm install

	npm run start
