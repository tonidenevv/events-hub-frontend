const BASE_URL = 'http://localhost:5000/events';

export const createOne = (data, token) => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorize: token,
        },
        body: data,
    })
        .then(res => {
            if (!res.ok) throw new Error(`Status: ${res.status}`);

            return res.json();
        });
}