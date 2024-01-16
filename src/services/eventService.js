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
            const isResponseOkay = res.ok;
            return res.json().then(res => {
                if (!isResponseOkay && !res.message) {
                    throw new Error(`Status: ${res.status}`);
                }
                return res;
            });
        });
}