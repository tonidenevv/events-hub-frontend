import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const handleAuth = (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
    };

    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
    }

    const handleDeleteAccount = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, handleDeleteAccount, handleAuth, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}