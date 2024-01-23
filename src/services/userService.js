import responseHandler from "../helpers/responseHandler";
const BASE_URL = 'http://localhost:5000/users';

export const getOne = (userToken, userId) => {
    return fetch(`${BASE_URL}/${userId}`, {
        headers: {
            Authorize: userToken
        }
    })
        .then(res => responseHandler(res));
}

export const deleteOne = (userToken, userId) => {
    return fetch(`${BASE_URL}/${userId}`, {
        method: 'DELETE',
        headers: {
            Authorize: userToken,
        },
    })
        .then(res => responseHandler(res));
}

export const changeOne = (userToken, userId, data) => {
    return fetch(`${BASE_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            Authorize: userToken,
        },
        body: data,
    })
        .then(res => responseHandler(res));
}

export const getBasicInfo = (userId) => {
    return fetch(`${BASE_URL}/${userId}/basic`)
        .then(res => responseHandler(res));
}