import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Header/MyNavbar";
import StorePage from "./components/HomePage/StorePage";
import LoginPage from "./components/Login/LoginPage";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="" element={<StorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
