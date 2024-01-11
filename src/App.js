import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Settings from "./components/Settings/Settings";


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

  return (
    <div className="App">
      <AuthContext.Provider value={{ user }}>
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
    </div>
  );
}

export default App;
