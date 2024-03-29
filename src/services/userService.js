import responseHandler from "../helpers/responseHandler";
const BASE_URL = 'https://events-hub-backend.vercel.app/users';

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

export const getSearched = (searchValue) => {
    return fetch(`${BASE_URL}?username=${searchValue}`)
        .then(res => responseHandler(res));
}