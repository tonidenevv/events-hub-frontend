import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Settings from "./components/Settings/Settings";
import { ToastProvider } from "./contexts/ToastContext";

function App() {

  return (
    <ToastProvider>
      <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
