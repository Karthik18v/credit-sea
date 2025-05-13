import React from "react";
import "./index.css";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaChartBar,
  FaFileAlt,
  FaUsersCog,
  FaPiggyBank,
  FaUniversity,
  FaPaypal,
  FaReceipt,
  FaPenFancy,
  FaUserTie,
  FaCalendarAlt,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

const MenuBar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <FaTachometerAlt />, highlight: true },
    { label: "Borrowers", icon: <FaUserFriends /> },
    { label: "Loans", icon: <FaMoneyCheckAlt /> },
    { label: "Repayments", icon: <FaHandHoldingUsd /> },
    { label: "Loan Parameters", icon: <FaBalanceScale /> },
    { label: "Accounting", icon: <FaFileInvoiceDollar /> },
    { label: "Reports", icon: <FaChartBar /> },
    { label: "Collateral", icon: <FaFileAlt /> },
    { label: "Access Configuration", icon: <FaUsersCog /> },
    { label: "Savings", icon: <FaPiggyBank /> },
    { label: "Other Incomes", icon: <FaUniversity /> },
    { label: "Payroll", icon: <FaPaypal /> },
    { label: "Expenses", icon: <FaReceipt /> },
    { label: "E-signature", icon: <FaPenFancy /> },
    { label: "Investor Accounts", icon: <FaUserTie /> },
    { label: "Calendar", icon: <FaCalendarAlt /> },
    { label: "Settings", icon: <FaCogs /> },
    { label: "Sign Out", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="avatar">👤</div>
        <div className="name">John Doe</div>
      </div>

      <ul className="menu">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={`menu-item ${item.highlight ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
