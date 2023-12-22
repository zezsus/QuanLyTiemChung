import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/NavBar.scss";
import { PiSignOutBold } from "react-icons/pi";

const NavBar = () => {
  return (
    <nav className="navbar">
      <header className="header">QuảnLýTiêmChủng</header>
      <div className="content">
        <Link to="/account">Quản lý tài khoản</Link>
        <Link to="/patient">Quản lý bệnh nhân</Link>
        <Link to="/vaccine">Quản lý vaccine</Link>
        <Link to="/doctor">Quản lý bác sĩ</Link>
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
