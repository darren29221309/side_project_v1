import React, { useState } from 'react';
import axios from 'axios';




function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password
      });
      setResult(response.data);
    } catch (error) {
      setResult('登入失敗：' + error.message);
    }
  };
  return (
    <div style={{ padding: '2rem' }}>
      <h2>登入系統</h2>
      <div>
        <input
          type="text"
          placeholder="帳號"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button onClick={handleLogin}>登入</button>
        <button onClick={() => window.location.href = "/"}>返回</button>
        <div><button onClick={() => window.location.href = "/findpassword"}>忘記密碼</button></div>
      </div>
      <p>{result}</p>
    </div>
  );
}

export default LoginPage;
