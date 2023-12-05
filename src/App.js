import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Header/MyNavbar";
import StorePage from "./components/HomePage/StorePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="" element={<StorePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
