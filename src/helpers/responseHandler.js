const responseHandler = (res) => {
    const isResponseOkay = res.ok;
    return res.json().then(res => {
        if (!isResponseOkay && !res.message) {
            throw new Error(`Status: ${res.status}`);
        }
        return res;
    });
}

export default responseHandler;