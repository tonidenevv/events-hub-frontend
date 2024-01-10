import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleRegister = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register handleRegister={handleRegister} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
