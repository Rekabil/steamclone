import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Header/MyNavbar";
import StorePage from "./components/HomePage/StorePage";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Register/Register";
import Create from "./components/Register/Create";
import GamePage from "./components/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="" element={<StorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/create" element={<Create />} />
          <Route path="/game/:gameId" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
