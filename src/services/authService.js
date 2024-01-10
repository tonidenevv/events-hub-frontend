const BASE_URL = 'http://localhost:5000/users';

export const register = (data) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {},
        body: data,
    })
        .then(res => res.json())
};