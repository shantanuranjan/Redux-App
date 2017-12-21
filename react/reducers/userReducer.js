import initialState from './initialState';

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_USERS":{
            return {...state, fetching: true}
        }
        case "FETCH_USERS_FULLFILLED": {
            return Object.assign({}, state, {fetched: true, fetching: false, users: action.payload});
        }
        case "FETCH_USERS_REJECTED":
            return Object.assign({},state, {fetching: false, error: action.payload});
    }

    return state;
}