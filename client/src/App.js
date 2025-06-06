import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/Register";
import HomePage from "./components/pages/Home";
import FindPasswordPage from "./components/pages/FindPassword";
function App() {
  return (
    // <div style={{ padding: '2rem' }}>
    //   <h2>註冊 / 登入系統</h2>

    // </div>

    <div>
      <header className = "title">Darren的網頁測試登入系統</header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/findpassword" element={<FindPasswordPage/>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
