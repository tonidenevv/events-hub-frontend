import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Settings from "./components/Settings/Settings";
import { ToastProvider } from "./contexts/ToastContext";
import Create from "./components/Create/Create";
import Events from "./components/Events/Events";
import EventDetails from "./components/EventDetails/EventDetails";
import NotFound from "./components/NotFound/NotFound";

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
              <Route path="/create" element={<Create />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:eventId" element={<EventDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
