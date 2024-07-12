import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SideNav } from "./components/nav/SideNav";
import { Home } from "./components/home/Home";

function App() {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth) {
      console.log("auth state : ", auth);
    }
  }, [auth]);

  return (
    <BrowserRouter>
      <div className="app-container flex">
        <SideNav />
        <div className="main-content w-[88%] bg-[#f7f8ff] p-10">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
