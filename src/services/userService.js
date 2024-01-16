const BASE_URL = 'http://localhost:5000/users';

export const getOne = (userToken, userId) => {
    return fetch(`${BASE_URL}/${userId}`, {
        headers: {
            Authorize: userToken
        }
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

export const deleteOne = (userToken, userId) => {
    return fetch(`${BASE_URL}/${userId}`, {
        method: 'DELETE',
        headers: {
            Authorize: userToken,
        },
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

export const changeOne = (userToken, userId, data) => {
    return fetch(`${BASE_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            Authorize: userToken,
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