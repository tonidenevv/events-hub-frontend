import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="bg-blue-500 w-full h-screen"></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
