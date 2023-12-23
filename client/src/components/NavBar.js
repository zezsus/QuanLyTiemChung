import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/NavBar.scss";
import { PiSignOutBold } from "react-icons/pi";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <header className="header" onClick={() => navigate("/")}>
        QuảnLýTiêmChủng
      </header>
      <div className="content">
        <Link to="/account">Quản lý tài khoản</Link>
        <Link to="/patient">Quản lý đối tượng tiêm</Link>
        <Link to="/vaccine">Quản lý vaccine</Link>
        <Link to="/doctor">Quản lý nhân viên y tế</Link>
      </div>
      <footer className="footer">
        <button>
          LogOut
          <PiSignOutBold size={20} />
        </button>
      </footer>
    </nav>
  );
};

export default NavBar;
