import responseHandler from "../helpers/responseHandler";
const BASE_URL = 'http://localhost:5000/comments';

export const create = (accessToken, commentText, eventId) => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorize: accessToken,
            'content-type': 'application/json',
        },
        body: JSON.stringify({ commentText, eventId })
    })
        .then(res => responseHandler(res));
}