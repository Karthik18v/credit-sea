import { FaTachometerAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1>CREDIT APP</h1>
      <div className="header-nav-items">
        <div className="nav-item">
          <FaTachometerAlt size={24} />
          <h4>Home</h4>
        </div>
        <div className="nav-item">
          <TbCurrencyNaira size={24} />
          <h4>Payments</h4>
        </div>
        <div className="nav-item">
          <FaBook size={24} />
          <h4>Budget</h4>
        </div>
        <div className="nav-item">
          <FaCreditCard size={24} />
          <h4>Card</h4>
        </div>
      </div>
      <div className="profile-summary">
        <IoMdNotifications size={24} />
        <LuMessageCircleMore size={24} />
        <FaUserCircle size={24} />
        <select className="role-selector">
          <option>User</option>
          <option>Verifier</option>
          <option>Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
