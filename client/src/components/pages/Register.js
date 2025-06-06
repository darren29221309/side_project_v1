import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          username,
          password,
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("❌ 發生錯誤：", error);

      if (error.response) {
        // 後端有回應但狀態碼不是 2xx
        console.error("狀態碼：", error.response.status);
        console.error("錯誤資料：", error.response.data);
        setResult("❌ 註冊失敗：" + error.response.data);
      } else if (error.request) {
        // request 已發出但沒有收到回應（可能是 CORS、後端沒開）
        console.error("請求送出但沒收到回應：", error.request);
        setResult("❌ 後端沒有回應（可能是沒啟動、被 CORS 擋）");
      } else {
        // 其他錯誤（如語法錯、設定錯）
        console.error("錯誤訊息：", error.message);
        setResult("❌ 請求錯誤：" + error.message);
      }
    }
  };



  
  return (
    <div style={{ padding: '2rem' }}>
      <h2>註冊系統</h2>
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
        <button onClick={handleRegister}>註冊</button>
        <button onClick={() => window.location.href = "/"}>返回</button>
      </div>
      <p>{result}</p>
    </div>
  );
}

export default RegisterPage;
