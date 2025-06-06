import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>歡迎測試</h1>
      <h2>請點選以下登入或測試</h2>
      <p className = "div1"><Link to = "/login">登入</Link></p>
      <p className = "div1"><Link to = "/register">註冊</Link></p>
    </div>
  );
}

export default HomePage;