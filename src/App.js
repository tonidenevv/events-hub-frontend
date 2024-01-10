import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleRegister = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register handleRegister={handleRegister} />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
