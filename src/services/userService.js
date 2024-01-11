const BASE_URL = 'http://localhost:5000/users';

export const getOne = (userToken, userId) => {
    return fetch(`${BASE_URL}/${userId}`, { headers: { Authorize: userToken } }).then(res => res.json());
}