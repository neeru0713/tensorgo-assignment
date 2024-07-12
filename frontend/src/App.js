import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth) {
      console.log("auth state : ", auth); 
    }
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
