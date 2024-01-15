export const hasErrors = {
    username: (username) => {
        if (username.length < 5 || username.length > 15) return true;

        const usernameRegex = /^[a-zA-Z0-9_-]{5,15}$/;

        if (!usernameRegex.test(username)) return true;

        return false;
    },
    password: (password) => {
        if (password.length < 5 || password.length > 15) return true;

        return false;
    },
    confirmPassword: ([confirmPassword, password]) => {
        if (password !== confirmPassword) return true;

        return false;
    },
    email: (email) => {
        if (email.length < 5 || email.length > 25) return true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) return true;

        return false;
    },
    gender: (gender) => {
        if (gender !== 'male' && gender !== 'female') return true;

        return false;
    },
}

export const createHasErrors = {
    title: (title) => {
        if (title.length < 5 || title.length > 20) return true;

        return false;
    },
    description: (description) => {
        if (description.length < 5 || description.length > 25) return true;

        return false;
    },
    eventType: (eventType) => {
        if (eventType.length < 3 || eventType.length > 20) return true;

        return false;
    },
    ticketPrice: (ticketPrice) => {
        if (ticketPrice < 1 || ticketPrice > 9999) return true;

        return false;
    }
}