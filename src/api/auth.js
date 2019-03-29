import { baseAPI } from "./base";


export function jwtLogin(username, password) {
    let data = {
        'username': username,
        'password': password
    };

    return baseAPI
            .post(`/token`, data)
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
}