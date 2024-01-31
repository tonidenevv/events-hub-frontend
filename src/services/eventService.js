import responseHandler from "../helpers/responseHandler";
const BASE_URL = 'https://events-hub-backend.vercel.app/events';

export const getAll = () => {
    return fetch(BASE_URL)
        .then(res => responseHandler(res));
}

export const getOne = (eventId) => {
    return fetch(`${BASE_URL}/${eventId}`)
        .then(res => responseHandler(res));
}

export const createOne = (data, token) => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorize: token,
        },
        body: data,
    })
        .then(res => responseHandler(res));
}

export const attend = (token, eventId) => {
    return fetch(`${BASE_URL}/${eventId}/attend`, {
        method: 'POST',
        headers: {
            Authorize: token,
        }
    })
        .then(res => responseHandler(res));
}

export const edit = (data, token, eventId) => {
    return fetch(`${BASE_URL}/${eventId}/edit`, {
        method: 'PUT',
        headers: {
            Authorize: token,
        },
        body: data,
    })
        .then(res => responseHandler(res));
}

export const del = (eventId, token) => {
    return fetch(`${BASE_URL}/${eventId}/delete`, {
        method: 'DELETE',
        headers: {
            Authorize: token,
        }
    })
        .then(res => responseHandler(res));
}