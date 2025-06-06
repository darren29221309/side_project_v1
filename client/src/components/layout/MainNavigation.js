import { Link } from "react-router-dom";


function MainNavigation() {
  return (
    <nav>
      <ul>
        <li><Link to = "/">主頁</Link></li>
        <li><Link to = "/login">登入</Link></li>
        <li><Link to = "/register">註冊</Link></li>
      </ul>
    </nav>
  );
}

export default MainNavigation;