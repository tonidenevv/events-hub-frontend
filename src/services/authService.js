const BASE_URL = 'http://localhost:5000/auth';

export const register = (data) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {},
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
        })
};

export const login = (data) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
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
};

export const logout = (token) => {
    return fetch(`${BASE_URL}/logout`, {
        method: 'GET',
        headers: {
            Authorize: token,
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

export const changePassword = (token, data) => {
    return fetch(`${BASE_URL}/change-password`, {
        method: 'POST',
        headers: {
            Authorize: token,
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
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