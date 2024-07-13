import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
export const SideNav = () => {
  return (
    <div className="side-nav-wrapper bg-[#242733] h-screen w-[12%] p-10">
      <div className="flex items-center mb-10 gap-1">
        <img className="h-8" src={logo} />
        <h1 className="text-lg font-semibold text-white ">Tensor Go</h1>
      </div>

      <div className="side-nav list-none flex flex-col h-[80vh] justify-between">
        <header>
          <ul className="flex flex-col gap-2 text-white">
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/your-plans">Your Plans</Link>
            </li>

            <li>
              <Link to="/manage-users">Manage Users</Link>
            </li>

            <li>
              <Link to="/create-plan">Create Plan</Link>
            </li>

          </ul>
        </header>
        <footer>
          <ul className="flex flex-col gap-2 text-white">
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
