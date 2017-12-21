import 'whatwg-fetch';

export default class UserService {

    static fetchUsers() {
         return fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        }).catch((err) => {
            return err;
        })
    }
}