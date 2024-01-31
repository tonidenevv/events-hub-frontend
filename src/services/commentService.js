import responseHandler from "../helpers/responseHandler";
const BASE_URL = 'https://events-hub-backend.vercel.app/comments';

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

export const like = (accessToken, commentId) => {
    return fetch(`${BASE_URL}/${commentId}/like`, {
        method: 'POST',
        headers: {
            Authorize: accessToken,
        }
    })
        .then(res => responseHandler(res));
}