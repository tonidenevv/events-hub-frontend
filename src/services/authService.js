import responseHandler from "../helpers/responseHandler";

const BASE_URL = 'https://events-hub-backend.vercel.app/auth';

export const register = (data) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {},
        body: data,
    })
        .then(res => responseHandler(res));
};

export const login = (data) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => responseHandler(res));
};

export const logout = (token) => {
    return fetch(`${BASE_URL}/logout`, {
        method: 'GET',
        headers: {
            Authorize: token,
        },
    })
        .then(res => responseHandler(res));
}

export const changePassword = (token, data) => {
    return fetch(`${BASE_URL}/change-password`, {
        method: 'POST',
        headers: {
            Authorize: token,
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => responseHandler(res));
}