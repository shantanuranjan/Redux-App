import 'whatwg-fetch';
import UserService from '../services/UserService';


function fetchUserSuccess(data) {
    return {type:'FETCH_USERS_FULLFILLED', payload:data};
}

function fetchUserFailure(data) {
    return {type:'FETCH_USERS_REJECTED', payload:err};
}

export function fetchUsers() {
    return function(dispatch) {
        return UserService.fetchUsers()
            .then((response) => {
                return response;
            })
            .then((data) => {
                dispatch(fetchUserSuccess(data));
            })
            .catch((err) => {
                dispatch(fetchUserFailure(err));
        })
    }
}