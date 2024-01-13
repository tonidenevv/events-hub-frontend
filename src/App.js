import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Settings from "./components/Settings/Settings";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContext } from "./contexts/ToastContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleAuth = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  }

  const showToast = (text, hasError) => {
    if (hasError) {
      toast.error(text, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast(text, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const handleDeleteAccount = () => {
    localStorage.clear();
    setUser(null);
  }

  return (
    <div className="App">
      <ToastContext.Provider value={{ showToast }}>
        <AuthContext.Provider value={{ user, handleDeleteAccount }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login handleAuth={handleAuth} />} />
              <Route path="/register" element={<Register handleAuth={handleAuth} />} />
              <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
        <ToastContainer />
      </ToastContext.Provider>
    </div>
  );
}

export default App;
